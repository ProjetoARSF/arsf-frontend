import { Injectable } from '@angular/core';
import { FeatureRepository } from '../repositories/feature.repository';
import { FeatureModel } from '../models/feature.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(
    private repository: FeatureRepository
  ) { }

  public getAllFeatures(): Observable<Array<FeatureModel>> {
    return this.repository.getAllFeatures().pipe(
      map(values => {
        const features = new Array<FeatureModel>();

        values.forEach(value => {
          features.push(Object.assign(new FeatureModel(), value))
        })

        return features;
      })
    );
  }

  public returnByAppIdAndFeatureNotInList(idApp: string, idsFeature: Array<FeatureModel>): Observable<Array<FeatureModel>> {
    return this.repository.returnByAppIdAndFeatureNotInList(idApp, idsFeature);
  }
}
