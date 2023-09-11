import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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

  public getPermissionRolesByIdRole(roleId: string): Observable<Array<PermissionRoleModel>> {
    return this.permissionRoleRepository.getPermissionRolesByIdRole(roleId)
      .pipe(
        map((value) => {
          const permissions = new Array<PermissionRoleModel>();
          value.forEach(v => {
            permissions.push(Object.assign(new PermissionRoleModel, v));
          })
          return permissions;
        })
      );
  }

  public getPrePermissionRolesByIdRole(roleId: string): Observable<Array<PrePermissionRoleModel>> {
    return this.prePermissionRoleRepository.getPrePermissionRolesByIdRole(roleId)
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

}
