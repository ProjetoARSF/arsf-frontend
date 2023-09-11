import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionModel } from '../models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionRepository {

  private readonly serviceMapping: string = '/arsf/permissiontype';

  constructor(private http: HttpClient) { }

  public getAllPermissions(): Observable<Array<PermissionModel>> {
    const url = this.serviceMapping;
    return this.http.get<Array<PermissionModel>>(url);
  }
}
