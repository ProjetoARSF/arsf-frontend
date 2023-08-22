import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryConstants } from './repository.constants';
import { RiskModel } from '../models/risk.model';

@Injectable({
  providedIn: 'root'
})
export class RiskAnalysisRepository {

  private readonly serviceMapping: string = '/riskanalysis';

  constructor(private http: HttpClient) { }

  /**
   * Busca todos os riscos de usuários associados a aplicação
   * @param appId ID da aplicação a ser pesquisada
   * @returns Lista com todos os riscos da aplicação
   */
  public getUsersRisk(appId: string): Observable<Array<RiskModel>> {
    if (appId == null) { appId = ''; }
    appId = encodeURIComponent(appId);

    const uri = `${RepositoryConstants.BASE_URL}${this.serviceMapping}/user/${appId}`;
    return this.http.get<Array<RiskModel>>(uri);
  }

  /**
   * Busca todos os riscos de papeis associados a aplicação
   * @param appId ID da aplicação a ser pesquisada
   * @returns Lista com todos os riscos da aplicação
   */
  public getRolesRisk(appId: string): Observable<Array<RiskModel>> {
    if (appId == null) { appId = ''; }
    appId = encodeURIComponent(appId);

    const uri = `${RepositoryConstants.BASE_URL}${this.serviceMapping}/role/${appId}`;
    return this.http.get<Array<RiskModel>>(uri);
  }

  /**
   * Busca todos os riscos de usuários associados a grupos
   * @param appId ID da aplicação a ser pesquisada
   * @returns Lista com todos os riscos da aplicação
   */
  public getGroupsRisk(appId: string): Observable<Array<RiskModel>> {
    if (appId == null) { appId = ''; }
    appId = encodeURIComponent(appId);

    const uri = `${RepositoryConstants.BASE_URL}${this.serviceMapping}/group/${appId}`;
    return this.http.get<Array<RiskModel>>(uri);
  }
}
