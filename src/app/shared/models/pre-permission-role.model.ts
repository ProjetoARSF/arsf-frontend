import { Selectable } from "../interfaces/selectable";
import { PermissionRoleModel } from "./permission-role.model";

export class PrePermissionRoleModel extends PermissionRoleModel implements Selectable {

  private idRisk: string;
  private approve: string;
  private dtApprove: Date;

  constructor();
  constructor(idFeature?: string, idPermission?: string, idRole?: string, idRisk?: string, approve?: string, dtApprove?: Date);
  constructor(idFeature?: string, idPermission?: string, idRole?: string, idRisk?: string, approve?: string, dtApprove?: Date) {
    super(idFeature, idPermission, idRole);
    this.idRisk = idRisk;
    this.approve = approve;
    this.dtApprove = dtApprove;
  }

  public getIdRisk(): string {
    return this.idRisk;
  }

  public getApprove(): string {
    return this.approve;
  }

  public getDtApprove(): Date {
    return this.dtApprove;
  }

  public setIdRisk(idRisk: string): void {
    this.idRisk = idRisk;
  }

  public setApprove(approve: string): void {
    this.approve = approve;
  }

  public setDtApprove(dtApprove: Date): void {
    this.dtApprove = dtApprove;
  }

  override getOptionId(): string {
    return this.getIdFeature();
  }
  override  getOptionText(): string {
    return this.getIdFeature();
  }
}
