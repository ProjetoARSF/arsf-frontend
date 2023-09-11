import { Injectable } from '@angular/core';
import { EtlRepository } from '../repositories/etl.repository';
import { Observable, filter, mergeMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtlService {

  private readonly SUCCESS = 'successfully';

  constructor(private repository: EtlRepository) { }

  public executeETL(): Observable<string> {
    return this.repository.executeScript().pipe(mergeMap((response) => {
      return this.repository.executeProcedure().pipe(tap((response) => response))
    })).pipe(filter((element) => {
      return element.includes(this.SUCCESS);
    }));
  }
}
