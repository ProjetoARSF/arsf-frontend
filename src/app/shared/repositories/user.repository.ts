import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  private readonly serviceMapping: string = '/arsf/users';

  constructor(private http: HttpClient) { }

  public getUserById(idUser: string): Observable<UserModel> {
    // Renorna null caso 'idUser' seja nulo, undefined ou vazio
    if (idUser?.trim().length == 0) return null;

    const uri = this.serviceMapping.concat('/').concat(idUser.trim());

    // Chama a aplicação para trazer os dados do usuário
    return this.http.get<UserModel>(uri);
  }

  /**
   * Verifica se usuário que está tentando logar possuí uma conta
   * @param idUser ID do usuário que será buscado na aplicação
   * @param password Senha do usuário que será buscado na aplicação
   * @returns 0 caso o usuário não exista e 1 caso exista
   */
  public userExists(idUser: string, password: string): Observable<Number> {
    // Retorna 0 caso 'idUser' ou 'password' sejam nulor ou vazios
    if (idUser?.trim().length == 0 || password?.trim().length == 0) return of(0);

    const uri = this.serviceMapping.concat('/login?')
      .concat('idUser=', idUser)
      .concat('&userPassword=', password);

    // Chama a aplicação para verificar existencia do usuário
    return this.http.get<Number>(uri);
  }
}
