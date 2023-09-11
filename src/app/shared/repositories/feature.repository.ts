import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureModel } from '../models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureRepository {

  private readonly serviceMapping: string = '/arsf/feature';

  constructor(private http: HttpClient) { }

  public getFeatureByIdApp(idApp: string): Observable<Array<FeatureModel>> {
    const url = this.serviceMapping.concat('/app', '/', idApp);
    return this.http.get<Array<FeatureModel>>(url);
  }

  public returnByAppIdAndFeatureNotInList(idApp: string, idsFeature: Array<FeatureModel>): Observable<Array<FeatureModel>> {
    const ids = idsFeature.map(feat => feat.getIdFeature());
    const url = this.serviceMapping
      .concat('/featurenotin')
      .concat('?idApp=', idApp)
      .concat('&idFeature=', ids.join(','));
    return this.http.get<Array<FeatureModel>>(url);
  }
}
