export class RiskModel {

  private rows: object = null;

  constructor();
  constructor(rows?: object);
  constructor(rows?: object) {
    this.rows = rows;
  }
}
