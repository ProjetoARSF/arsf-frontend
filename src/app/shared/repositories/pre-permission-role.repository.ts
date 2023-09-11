import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrePermissionRoleModel } from '../models/pre-permission-role.model';

@Injectable({
  providedIn: 'root'
})
export class PrePermissionRoleRepository {

  private readonly serviceMapping: string = '/arsf/prepermissionrole';

  constructor(private http: HttpClient) { }

  public getPrePermissionRolesByIdRole(idRole: string): Observable<Array<PrePermissionRoleModel>> {
    const url = this.serviceMapping.concat('/role', '/', idRole);
    return this.http.get<Array<PrePermissionRoleModel>>(url);
  }
}
