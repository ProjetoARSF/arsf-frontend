import { Injectable } from "@angular/core";
import { SessionService } from "./session.service";
import { UserModel } from "src/app/shared/models/user.model";

@Injectable()
export class LoginService {

  private readonly serviceMapping: string = '/arsf/users';

  constructor(
    private sessionService: SessionService
  ) { }

  /**
   * Inicia o processo de login no sistema ARSF
   * @param idUser id do usuário a ser logadp
   * @param password senha do usuário a ser logado
   * @returns true caso valido e logado e false caso usuário ou senha estaja errado
   */
  public async login(idUser: string, password: string): Promise<boolean> {
    const exists: boolean = await this.userExists(idUser, password);
    if (!exists) return false;

    const user: UserModel = await this.getUserById(idUser);

    this.sessionService.createSession(this.generateSessionData(user));
    return true;
  }

  /**
   * Verifica se o usuário e a senha estão corretos
   * @param idUser id do usuário a ser pesquisado
   * @param password senha do usuário a ser pesquisada
   * @returns 0 para inválido 1 para válido
   */
  private async userExists(idUser: string, password: string): Promise<boolean> {
    const url = this.serviceMapping.concat('/login?')
      .concat('idUser=', idUser)
      .concat('&userPassword=', password);

    return await fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(body => (body === 1));
  }

  /**
   * Busca um usuário pelo seu id no banco de dados
   * @param idUser id do usuário a ser pesquisado
   * @returns informações do usuário
   */
  private async getUserById(idUser: string): Promise<UserModel> {
    const url = this.serviceMapping.concat('/', idUser);
    return await fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(body => Object.assign(new UserModel, body));
  }

  /**
   * Codifica o usuário para fazer o conteudo do cookie
   * @param user {@link UserModel} retornado da aplicação
   * @returns string em base64 embaralhada
   */
  private generateSessionData(user: UserModel): string {
    let base64 = btoa(JSON.stringify(user));
    base64 = base64.split('').sort(c => 0.5 - Math.random()).join('');
    return btoa(base64);
  }
}
