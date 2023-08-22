export class FeatureModel {

  private idFeature: string = null;
  private idApp: string = null;
  private featureDesc: string = null;

  constructor();
  constructor(idFeature?: string, idApp?: string, featureDesc?: string);
  constructor(idFeature?: string, idApp?: string, featureDesc?: string) {
    this.idFeature = idFeature;
    this.idApp = idApp;
    this.featureDesc = featureDesc;
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

  public setIdFeature(idFeature: string): void {
    this.idFeature = idFeature;
  }

  public setIdApp(idApp: string): void {
    this.idApp = idApp;
  }

  public setFeatureDesc(featureDesc: string): void {
    this.featureDesc = featureDesc;
  }
}
