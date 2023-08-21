import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Application {
  id: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  private readonly baseUrl: string = '/arsf';
  private readonly serviceMapping: string = '/app';

  constructor(private http: HttpClient) { }

  public getApplicatations(): Observable<Application> {
    const uri = `${this.baseUrl}${this.serviceMapping}`;
    return this.http.get<Application>(uri);
  }
}