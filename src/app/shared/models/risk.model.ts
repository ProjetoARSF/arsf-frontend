import { Risk } from "../interfaces/risk";

export class RiskModel {

  private rows: Array<Risk> = null;

  constructor();
  constructor(rows?: Array<Risk>);
  constructor(rows?: Array<Risk>) {
    this.rows = rows;
  }

  public getRows(): Array<Risk> {
    return this.rows;
  }

  public setRows(rows: Array<Risk>): void {
    this.rows = rows;
  }
}
