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

  public setIdUser(idUser: string): void {
    this.idUser = idUser;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public setUserEmail(userEmail: string): void {
    this.userEmail = userEmail;
  }

  public setUserPassword(userPassword: string): void {
    this.userPassword = userPassword;
  }
}
