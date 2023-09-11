import { Risk } from "../../interfaces/risk";

export class GroupRiskModel implements Risk {
  private id_group: string;
  private group_name: string;
  private id_app: string;
  private id_riskmatrix: string;
  private riskmatrix_desc: string;

  constructor();
  constructor(id_group?: string, group_name?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string);
  constructor(id_group?: string, group_name?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string) {
    this.id_group = id_group;
    this.group_name = group_name;
    this.id_app = id_app;
    this.id_riskmatrix = id_riskmatrix;
    this.riskmatrix_desc = riskmatrix_desc;
  }

  getId(): string {
    return this.id_group;
  }
  getName(): string {
    return this.group_name;
  }
  getAppId(): string {
    return this.id_app;
  }
  getRiskMatrixId(): string {
    return this.id_riskmatrix;
  }
  getRiskMatrixDescription(): string {
    return this.riskmatrix_desc;
  }

  public setIdGroup(id_group: string): void {
    this.id_group = id_group;
  }

  public setGroupName(group_name: string): void {
    this.group_name = group_name;
  }

  public setIdApp(id_app: string): void {
    this.id_app = id_app;
  }

  public setIdRiskmatrix(id_riskmatrix: string): void {
    this.id_riskmatrix = id_riskmatrix;
  }

  public setRiskmatrixDescription(riskmatrix_desc: string): void {
    this.riskmatrix_desc = riskmatrix_desc;
  }
}
