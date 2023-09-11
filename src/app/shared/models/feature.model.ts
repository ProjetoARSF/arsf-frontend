import { Selectable } from "../interfaces/selectable";
import { PermissionModel } from "./permission.model";

export class FeatureModel implements Selectable {

  private idFeature: string = null;
  private idApp: string = null;
  private featureDesc: string = null;

  private inactivePermissions: Array<PermissionModel> = new Array<PermissionModel>();
  private activePermissions: Array<PermissionModel> = new Array<PermissionModel>();

  constructor();
  constructor(idFeature?: string, idApp?: string, featureDesc?: string, inactivePermissions?: Array<PermissionModel>, activePermissions?: Array<PermissionModel>);
  constructor(idFeature?: string, idApp?: string, featureDesc?: string, inactivePermissions?: Array<PermissionModel>, activePermissions?: Array<PermissionModel>) {
    this.idFeature = idFeature;
    this.idApp = idApp;
    this.featureDesc = featureDesc;
    this.inactivePermissions = inactivePermissions;
    this.activePermissions = activePermissions;
  }

  public getIdFeature(): string {
    return this.idFeature;
  }

  public getIdApp(): string {
    return this.idApp;
  }

  public getFeatureDesc(): string {
    return this.featureDesc;
  }

  public getActivePermissions(): Array<PermissionModel> {
    return this.activePermissions;
  }

  public getInactivePermissions(): Array<PermissionModel> {
    return this.inactivePermissions;
  }

  public setIdFeature(idFeature: string): void {
    this.idFeature = idFeature;
  }

  public setIdApp(idApp: string): void {
    this.idApp = idApp;
  }

  public setFeatureDesc(featureDesc: string): void {
    this.featureDesc = featureDesc;
  }

  public setActivePermissions(activePermissions: Array<PermissionModel>): void {
    this.activePermissions = activePermissions;
  }

  public setInactivePermissions(inactivePermissions: Array<PermissionModel>): void {
    this.inactivePermissions = inactivePermissions;
  }

  getOptionId(): string {
    return this.getIdFeature();
  }
  getOptionText(): string {
    return this.getIdFeature();
  }
}
