import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleRepository {

  private readonly serviceMapping: string = '/arsf/role';

  constructor(private http: HttpClient) { }

  public getRoleByAppId(idApp: string): Observable<Array<RoleModel>> {
    if (idApp?.trim().length == 0) return null;
    const uri = this.serviceMapping.concat('/app').concat('/').concat(idApp.trim());
    return this.http.get<Array<RoleModel>>(uri);
  }
}
