import { Injectable } from '@angular/core';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { ApplicationRepository } from '../repositories/application.repository';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private readonly serviceMapping: string = '/app';

  constructor(private repository: ApplicationRepository) { }

  public getApplicatations(): Array<ApplicationModel> {
    let applications: Array<ApplicationModel> = new Array<ApplicationModel>();

    this.repository.getApplicatations().subscribe(apps => {
      apps.forEach(app => {
        const application = Object.assign(new ApplicationModel, app);
        applications.push(application);
      });
    });

    return applications;
  }


  public getApplicatation(appId: string): ApplicationModel {
    let application: ApplicationModel = null;

    this.repository.getApplicatation(appId).subscribe(app => {
      if (app) {
        application = Object.assign(new ApplicationModel, app);
      }
    });

    return application;
  }
}
