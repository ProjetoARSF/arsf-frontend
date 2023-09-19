import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { PermissionRoleModel } from '../models/permission-role.model';
import { PrePermissionRoleRepository } from '../repositories/pre-permission-role.repository';
import { PermissionRoleRepository } from '../repositories/permission-role.repository';
import { PrePermissionRoleModel } from '../models/pre-permission-role.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionRoleService {

  constructor(
    private permissionRoleRepository: PermissionRoleRepository,
    private prePermissionRoleRepository: PrePermissionRoleRepository
  ) { }

  public getPermissionRolesByIdRole(idRole: string): Observable<Array<PermissionRoleModel>> {
    return this.permissionRoleRepository.getPermissionRolesByIdRole(idRole)
      .pipe(
        catchError((err) => of(new Array<PermissionRoleModel>())),
        map((value) => {
          const permissions = new Array<PermissionRoleModel>();
          value.forEach(v => {
            permissions.push(Object.assign(new PermissionRoleModel, v));
          })
          return permissions;
        })
      );
  }

  public getPrePermissionRolesByIdRole(idRole: string): Observable<Array<PrePermissionRoleModel>> {
    return this.prePermissionRoleRepository.getPrePermissionRolesByIdRole(idRole)
      .pipe(
        catchError((err) => {
          return of(new Array<PrePermissionRoleModel>());
        }),
        map((value) => {
          const permissions = new Array<PrePermissionRoleModel>();
          value.forEach(v => {
            const prePermission = Object.assign(new PrePermissionRoleModel, v);
            prePermission.setIdFeature('*'.concat(prePermission.getIdFeature()));
            permissions.push(prePermission);
          })
          return permissions;
        })
      );
  }

  public updatePermissionRoles(permissionRoles: Array<PermissionRoleModel>): Observable<any> {
    return of(permissionRoles).pipe(
      switchMap((permissionRoles) => {
        const list = permissionRoles.map(permissionRole => {
          return this.permissionRoleRepository.deletePermissionsByFeatureAndRole(permissionRole.getIdFeature(), permissionRole.getIdRole())
            .pipe(
              catchError((err) => of(new Array<PermissionRoleModel>())),
              switchMap((value) => {
                if(!permissionRole.getNeedToBeCreated()) return of(new Array<PermissionRoleModel>());
                return this.permissionRoleRepository.createPermission(permissionRole);
              })
            );
        });

        if (!list.length) {
          return of(new Array<PermissionRoleModel>());
        }

        return forkJoin(list);
      }),
      catchError((err) => {
        return of(new Array<PermissionRoleModel>());
      })
    )
  }

  public updatePrePermissionRoles(prePermissionRoles: Array<PrePermissionRoleModel>): Observable<any> {
    return of(prePermissionRoles).pipe(
      switchMap((prePermissionRoles) => {
        console.log("switchMap - updatePrePermissionRoles")
        const list = prePermissionRoles.map(prePermissionRole => {
          return this.prePermissionRoleRepository.deletePermissionsByFeatureAndRole(prePermissionRole.getIdFeature(), prePermissionRole.getIdRole())
            .pipe(
              catchError((err) => of(new Array<PrePermissionRoleModel>())),
              switchMap((value) => {
                if(!prePermissionRole.getNeedToBeCreated()) return of(new Array<PrePermissionRoleModel>());
                return this.prePermissionRoleRepository.createPermission(prePermissionRole)})
            );
        });

        if (!list.length) {
          return of(new Array<PrePermissionRoleModel>());
        }

        return forkJoin(list);
      }),
      catchError((err) => of(new Array<PrePermissionRoleModel>()))
    )
  }

}
