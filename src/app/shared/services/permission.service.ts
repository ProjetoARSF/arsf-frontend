import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { PermissionRepository } from '../repositories/permission.repository';
import { PermissionModel } from '../models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private repository: PermissionRepository
  ) { }

  public getAllPermissions(): Observable<Array<PermissionModel>> {
    return this.repository.getAllPermissions()
      .pipe(
        catchError((err) => {
          return of(new Array<PermissionModel>());
        }),
        map((value) => {
          const permissions = new Array<PermissionModel>();
          value.forEach(v => {
            const prePermission = Object.assign(new PermissionModel, v);
            permissions.push(prePermission);
          })
          return permissions;
        })
      );
  }
}
