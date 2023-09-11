import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { PermissionRoleModel } from '../models/permission-role.model';
import { FeatureModel } from '../models/feature.model';
import { PermissionModel } from '../models/permission.model';
import { PermissionService } from './permission.service';
import { PermissionRoleService } from './permission-role.service';
import { FeatureRepository } from '../repositories/feature.repository';

@Injectable({
  providedIn: 'root'
})
export class RoleXFeatureService {

  constructor(
    private featureService: FeatureRepository,
    private permissionRoleService: PermissionRoleService,
    private permissionService: PermissionService
  ) { }

  public getFeaturesByRole(appId: string, roleId: string): Observable<Array<Array<FeatureModel>>> {
    let allFeatures = new Array<Array<FeatureModel>>();
    let rightFeatures = new Array<FeatureModel>();
    let leftFeatures = new Array<FeatureModel>();
    let permissions = new Array<PermissionModel>();
    return this.permissionService.getAllPermissions()
      .pipe(
        switchMap((start) => {
          permissions = permissions.concat(start);
          return this.permissionRoleService.getPermissionRolesByIdRole(roleId);
        })
      )
      .pipe(
        switchMap((permissionRoles) => {
          rightFeatures = this.processRoles(permissionRoles, permissions);
          return this.permissionRoleService.getPrePermissionRolesByIdRole(roleId);
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

            leftFeatures.push(feature);
          });
          allFeatures.push(leftFeatures);
          return of(allFeatures);
        })
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
