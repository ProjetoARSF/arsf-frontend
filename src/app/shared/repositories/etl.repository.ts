import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtlRepository {

  private readonly serviceMapping: string = '/arsf/api';

  constructor(private http: HttpClient) { }

  public executeScript(): Observable<string> {
    const uri = `${this.serviceMapping}/execute-script`;
    return this.http.get(uri, {responseType: 'text'});
  }

  public executeProcedure(): Observable<string> {
    const uri = `${this.serviceMapping}/execute-script-proc`;
    return this.http.get(uri, {responseType: 'text'});
  }
}
