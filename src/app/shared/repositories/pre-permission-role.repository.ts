import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PrePermissionRoleModel } from '../models/pre-permission-role.model';

@Injectable({
  providedIn: 'root'
})
export class PrePermissionRoleRepository {

  private readonly serviceMapping: string = '/arsf/prepermissionrole';

  constructor(private http: HttpClient) { }

  public createPermission(prePermissionRoleModel: PrePermissionRoleModel): Observable<PrePermissionRoleModel> {
    const url = this.serviceMapping;
    return this.http.post<PrePermissionRoleModel>(url, prePermissionRoleModel);
  }

  public getPrePermissionRolesByIdRole(idRole: string): Observable<Array<PrePermissionRoleModel>> {
    const url = this.serviceMapping.concat('/role', '/', idRole);
    return this.http.get<Array<PrePermissionRoleModel>>(url);
  }

  public deletePermissionsByFeatureAndRole(idFeature: string, idRole: string): Observable<string> {
    const url = this.serviceMapping.concat('/deleterole', '/', idFeature, '/', idRole);
    return this.http.delete<string>(url);
  }

}
