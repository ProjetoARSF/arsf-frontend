import { Injectable } from "@angular/core";
import { RoleRepository } from "../repositories/role.repository";
import { Observable, catchError, map, of } from "rxjs";
import { RoleModel } from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private repository: RoleRepository
  ) { }

  public getRoleByAppId(idApp: string): Observable<Array<RoleModel>> {
    return this.repository.getRoleByAppId(idApp)
      .pipe(
        map((roles) => {
          const mappedRole = new Array<RoleModel>();
          roles.forEach(role => mappedRole.push(Object.assign(new RoleModel, role)));
          return mappedRole;
        }),
        catchError((err) => of(new Array<RoleModel>()))
      );
  }

}
