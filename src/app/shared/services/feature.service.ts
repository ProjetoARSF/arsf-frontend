import { Injectable } from '@angular/core';
import { FeatureRepository } from '../repositories/feature.repository';
import { FeatureModel } from '../models/feature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(
    private repository: FeatureRepository
  ) { }

  public returnByAppIdAndFeatureNotInList(idApp: string, idsFeature: Array<FeatureModel>): Observable<Array<FeatureModel>> {
    return this.repository.returnByAppIdAndFeatureNotInList(idApp, idsFeature);
  }
}
