import { Selectable } from "../interfaces/selectable";

export class PermissionRoleModel implements Selectable {

  protected idFeature: string = null;
  protected idPermission: string = null;
  protected idRole: string = null;

  constructor();
  constructor(idFeature?: string, idPermission?: string, idRole?: string);
  constructor(idFeature?: string, idPermission?: string, idRole?: string) {
    this.idFeature = idFeature;
    this.idPermission = idPermission;
    this.idRole = idRole;
  }

  public getIdFeature(): string {
    return this.idFeature;
  }

  public getIdPermission(): string {
    return this.idPermission;
  }

  public getIdRole(): string {
    return this.idRole;
  }

  public setIdFeature(idFeature: string): void {
    this.idFeature = idFeature;
  }

  public setIdPermission(idPermission: string): void {
    this.idPermission = idPermission;
  }

  public setIdRole(idRole: string): void {
    this.idRole = idRole;
  }

  getOptionId(): string {
    return this.getIdFeature();
  }
  getOptionText(): string {
    return this.getIdFeature();
  }
}
