export class UserModel {

  private idUser: string = null;
  private userName: string = null;
  private userEmail: string = null;
  private userPassword: string = null;

  constructor();
  constructor(idUser?: string, userName?: string, userEmail?: string, userPassword?: string);
  constructor(idUser?: string, userName?: string, userEmail?: string, userPassword?: string) {
    this.idUser = idUser;
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }

  public getIdUser(): string {
    return this.idUser;
  }

  public getUserName(): string {
    return this.userName;
  }

  public getUserEmail(): string {
    return this.userEmail;
  }

  public getUserPassword(): string {
    return this.userPassword;
  }

  public setIdUser(): void {
    this.idUser;
  }

  public setUserName(): void {
    this.userName;
  }

  public setUserEmail(): void {
    this.userEmail;
  }

  public setUserPassword(): void {
    this.userPassword;
  }
}
