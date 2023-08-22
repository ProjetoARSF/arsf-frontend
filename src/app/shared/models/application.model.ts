export class ApplicationModel {

  private idApp: string = null;
  private appName: string = null;

  constructor();
  constructor(idApp?: string, appName?: string);
  constructor(idApp?: string, appName?: string) {
    this.idApp = idApp;
    this.appName = appName;
  }

  public getIdApp(): string {
    return this.idApp;
  }

  public getAppName(): string {
    return this.appName;
  }

  public setIdApp(idApp: string): void {
    this.idApp = idApp;
  }

  public setAppName(appName: string): void {
    this.appName = appName;
  }
}
