export class RoleModel {

  private idRole: string = null;
  private idApp: string = null;
  private roleDesc: string = null;

  constructor();
  constructor(idRole?: string, idApp?: string, roleDesc?: string);
  constructor(idRole?: string, idApp?: string, roleDesc?: string) {
    this.idRole = idRole;
    this.idApp = idApp
    this.roleDesc = roleDesc;
  }

  public getIdRole(): string {
    return this.idRole;
  }

  public getIdApp(): string {
    return this.idApp;
  }

  public getRoleDesc(): string {
    return this.roleDesc;
  }

  public setIdRole(idRole: string): void {
    this.idRole = idRole;
  }

  public setIdApp(idApp: string): void {
    this.idApp = idApp;
  }

  public setRoleDesc(roleDesc: string): void {
    this.roleDesc = roleDesc;
  }
}
