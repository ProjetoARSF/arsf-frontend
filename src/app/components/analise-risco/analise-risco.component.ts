import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { ApplicationService } from 'src/app/shared/services/application.service';


@Component({
  selector: 'app-analise-risco',
  templateUrl: './analise-risco.component.html',
  styleUrls: ['./analise-risco.component.scss']
})
export class AnaliseRiscoComponent implements OnInit {

  protected applications: Array<ApplicationModel> = new Array<ApplicationModel>();
  protected description: string = '';

  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.applications = this.applicationService.getApplicatations();
  }

  onChangeApplication(value: string): void {
    this.description = this.applications.at(Number(value)).getAppName();
  }
}
