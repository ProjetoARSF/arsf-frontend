import { Risk } from "../interfaces/risk";

export class RiskTableModel {
  private name: string;
  private data: Array<Risk>;

  constructor();
  constructor(name?: string, data?: Array<Risk>);
  constructor(name?: string, data?: Array<Risk>) {
    this.name = name;
    this.data = data;
  }

  public getName(): string {
    return this.name;
  }

  public getData(): Array<Risk> {
    return this.data;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setData(data: Array<Risk>): void {
    this.data = data;
  }
}
