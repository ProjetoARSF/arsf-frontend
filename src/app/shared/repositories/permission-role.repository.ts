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

  public createPermission(permissionRoleModel: PermissionRoleModel): Observable<PermissionRoleModel> {
    const url = this.serviceMapping;
    return this.http.post<PermissionRoleModel>(url, permissionRoleModel);
  }

  public getPermissionRolesByIdRole(idRole: string): Observable<Array<PermissionRoleModel>> {
    const url = this.serviceMapping.concat('/role', '/', idRole);
    return this.http.get<Array<PermissionRoleModel>>(url);
  }

  public deletePermissionsByFeatureAndRole(idFeature: string, idRole: string): Observable<string> {
    const url = this.serviceMapping.concat('/deleterole', '/', idFeature, '/', idRole);
    return this.http.delete<string>(url);
  }
}
