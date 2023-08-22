import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { ApplicationService } from 'src/app/shared/services/application.service';


@Component({
  selector: 'app-analise-risco',
  templateUrl: './analise-risco.component.html',
  styleUrls: ['./analise-risco.component.scss']
})
export class AnaliseRiscoComponent implements OnInit {

  protected aplicacoes: Array<ApplicationModel> = new Array<ApplicationModel>();
  protected descricaoAplicacao: string = '';

  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.aplicacoes = this.applicationService.getApplicatations();
  }

  onChangeApplication(event: Event) : void {
    const target: Element = event.target as Element;
    const value: number = Number(target.getAttribute('value'));

    this.descricaoAplicacao = this.aplicacoes.at(value).getAppName();
  }
}
