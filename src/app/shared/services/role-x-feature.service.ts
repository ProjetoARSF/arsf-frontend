import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { PermissionRoleModel } from '../models/permission-role.model';
import { FeatureModel } from '../models/feature.model';
import { PermissionModel } from '../models/permission.model';
import { PermissionService } from './permission.service';
import { PermissionRoleService } from './permission-role.service';
import { FeatureRepository } from '../repositories/feature.repository';
import { PrePermissionRoleModel } from '../models/pre-permission-role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleXFeatureService {

  constructor(
    private featureService: FeatureRepository,
    private permissionRoleService: PermissionRoleService,
    private permissionService: PermissionService
  ) { }

  public getFeaturesByRole(appId: string, idRole: string): Observable<Array<Array<FeatureModel>>> {
    let allFeatures = new Array<Array<FeatureModel>>();
    let rightFeatures = new Array<FeatureModel>();
    let leftFeatures = new Array<FeatureModel>();
    let permissions = new Array<PermissionModel>();
    return this.permissionService.getAllPermissions()
      .pipe(
        switchMap((start) => {
          permissions = permissions.concat(start);
          return this.permissionRoleService.getPermissionRolesByIdRole(idRole);
        })
      )
      .pipe(
        switchMap((permissionRoles) => {
          rightFeatures = this.processRoles(permissionRoles, permissions);
          return this.permissionRoleService.getPrePermissionRolesByIdRole(idRole);
        })
      )
      .pipe(
        switchMap((permissionRoles) => {
          rightFeatures = rightFeatures.concat(this.processRoles(permissionRoles, permissions));

          rightFeatures.forEach(rightFeature => {
            const active = new Array<PermissionModel>();
            const inactive = new Array<PermissionModel>();

            permissions.forEach(permission => {
              const permissionIds = rightFeature.getActivePermissions().map(ap => ap.getIdPermission());
              if (permissionIds.includes(permission.getIdPermission())) {
                active.push(permission);
              } else {
                inactive.push(permission);
              }
            })

            rightFeature.setActivePermissions(active);
            rightFeature.setInactivePermissions(inactive);
          })

          allFeatures.push(rightFeatures);

          if (!rightFeatures.length) {
            return this.featureService.getAllFeatures();
          }

          return this.featureService.returnByAppIdAndFeatureNotInList(appId, rightFeatures);
        })
      ).pipe(
        switchMap((features) => {
          features.forEach(f => {
            const feature = Object.assign(new FeatureModel, f);
            feature.setActivePermissions(new Array<PermissionModel>())
            feature.setInactivePermissions(new Array<PermissionModel>());

            permissions.forEach(permission => {
              feature.getInactivePermissions().push(permission);
            })

            feature.setIdFeature('*'.concat(feature.getIdFeature()));

            leftFeatures.push(feature);
          });
          allFeatures.push(leftFeatures);
          return of(allFeatures);
        })
      );
  }

  public updateRoleXFeatures(permissionRoles: Array<PermissionRoleModel>, prePermissionRoles: Array<PrePermissionRoleModel>): Observable<boolean> {

    return this.permissionRoleService.updatePermissionRoles(permissionRoles).pipe(
      switchMap((value) => this.permissionRoleService.updatePrePermissionRoles(prePermissionRoles))
    ).pipe(
      switchMap((value) => of(true))
    );
  }

  private processRoles(permissionRoles: Array<PermissionRoleModel>, permissions: Array<PermissionModel>): Array<FeatureModel> {
    const features = new Array<FeatureModel>();
    permissionRoles.forEach((permissionRole) => {
      let feature = features.filter(feat => feat.getIdFeature() === permissionRole.getIdFeature())[0];
      if (!feature) {
        feature = new FeatureModel(permissionRole.getIdFeature());
        feature.setActivePermissions(new Array<PermissionModel>());
        features.push(feature);
      }
      if (feature) {
        feature.getActivePermissions().push(new PermissionModel(permissionRole.getIdPermission()));
      }
    });

    return features;
  }
}
