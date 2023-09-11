import { Risk } from "../../interfaces/risk";

export class RoleRiskModel implements Risk {
  private id_role: string;
  private role_desc: string;
  private id_app: string;
  private id_riskmatrix: string;
  private riskmatrix_desc: string;

  constructor();
  constructor(id_role?: string, role_desc?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string);
  constructor(id_role?: string, role_desc?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string) {
    this.id_role = id_role;
    this.role_desc = role_desc;
    this.id_app = id_app;
    this.id_riskmatrix = id_riskmatrix;
    this.riskmatrix_desc = riskmatrix_desc;
  }

  getId(): string {
    return this.id_role;
  }
  getName(): string {
    return this.role_desc;
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


  public setIdRole(id_role: string): void {
    this.id_role = id_role;
  }

  public setRoleDesc(role_desc: string): void {
    this.role_desc = role_desc;
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
