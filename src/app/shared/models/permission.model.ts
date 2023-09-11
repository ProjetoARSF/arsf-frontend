import { Selectable } from "../interfaces/selectable";

export class PermissionModel implements Selectable {

  private idPermission: string = null;
  private permissionName: string = null;
  private permissionType: string = null;

  constructor();
  constructor(idPermission?: string, permissionName?: string, permissionType?: string);
  constructor(idPermission?: string, permissionName?: string, permissionType?: string) {
    this.idPermission = idPermission;
    this.permissionName = permissionName;
    this.permissionType = permissionType;
  }

  public getIdPermission(): string {
    return this.idPermission;
  }

  public getPermissionName(): string {
    return this.permissionName;
  }

  public getPermissionType(): string {
    return this.permissionType;
  }

  public setIdPermission(idPermission: string): void {
    this.idPermission = idPermission;
  }

  public setPermissionName(permissionName: string): void {
    this.permissionName = permissionName;
  }

  public setPermissionType(permissionType: string): void {
    this.permissionType = permissionType;
  }

  getOptionId(): string {
    return this.getIdPermission();
  }
  getOptionText(): string {
    return this.getIdPermission();
  }
}
