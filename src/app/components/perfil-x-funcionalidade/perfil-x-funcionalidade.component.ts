import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { ApplicationService } from 'src/app/shared/services/application.service';

@Component({
  selector: 'app-perfil-x-funcionalidade',
  templateUrl: './perfil-x-funcionalidade.component.html',
  styleUrls: ['./perfil-x-funcionalidade.component.scss']
})
export class PerfilXFuncionalidadeComponent implements OnInit{
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
