import { Risk } from "../../interfaces/risk";

export class UserRiskModel implements Risk {
  private id_user: string;
  private user_name: string;
  private id_app: string;
  private id_riskmatrix: string;
  private riskmatrix_desc: string;

  constructor();
  constructor(id_user?: string, user_name?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string);
  constructor(id_user?: string, user_name?: string, id_app?: string, id_riskmatrix?: string, riskmatrix_desc?: string) {
    this.id_user = id_user;
    this.user_name = user_name;
    this.id_app = id_app;
    this.id_riskmatrix = id_riskmatrix;
    this.riskmatrix_desc = riskmatrix_desc;
  }

  getId(): string {
    return this.id_user;
  }
  getName(): string {
    return this.user_name;
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

  public setIdUser(id_user: string): void {
    this.id_user = id_user;
  }

  public setUserName(user_name: string): void {
    this.user_name = user_name;
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
