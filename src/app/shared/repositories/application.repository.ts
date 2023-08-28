import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationModel } from 'src/app/shared/models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationRepository {

  private readonly serviceMapping: string = '/arsf/app';

  constructor(private http: HttpClient) { }

  /**
   * Busca todas as as aplicações cadastradas no sistema
   * @returns Lista com todas as aplicações cadastradas no sistema
   */
  public getApplicatations(): Observable<Array<ApplicationModel>> {
    const uri = `${this.serviceMapping}`;
    return this.http.get<Array<ApplicationModel>>(uri);
  }

  /**
   * Realiza a busca de uma aplicação pelo seu ID
   * @param appId ID da aplicação a ser pesquisada
   * @returns Aplicacao
   */
  public getApplicatation(appId: string): Observable<ApplicationModel> {
    if (appId == null) {
      appId = '';
    }

    appId = encodeURIComponent(appId);

    const uri = `${this.serviceMapping}/${appId}`;
    return this.http.get<ApplicationModel>(uri);
  }
}
