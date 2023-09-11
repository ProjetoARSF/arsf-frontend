export interface Risk {
  getId(): string;
  getName(): string;
  getAppId(): string;
  getRiskMatrixId(): string;
  getRiskMatrixDescription(): string;
}
