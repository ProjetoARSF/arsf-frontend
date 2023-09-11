import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionRoleModel } from '../models/permission-role.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionRoleRepository {

  private readonly serviceMapping: string = '/arsf/permissionrole';

  constructor(private http: HttpClient) { }

  public getPermissionRolesByIdRole(idRole: string): Observable<Array<PermissionRoleModel>> {
    const url = this.serviceMapping.concat('/role', '/', idRole);
    return this.http.get<Array<PermissionRoleModel>>(url);
  }
}
