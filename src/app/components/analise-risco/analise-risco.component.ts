import { Component, OnInit } from '@angular/core';
import { AplicacaoService, Application } from 'src/app/services/aplicacao/aplicacao.service';

@Component({
  selector: 'app-analise-risco',
  templateUrl: './analise-risco.component.html',
  styleUrls: ['./analise-risco.component.scss']
})
export class AnaliseRiscoComponent implements OnInit {

  protected aplicacoes: Array<Application> = [];

  constructor(private applicationService: AplicacaoService) { }

  ngOnInit(): void {
    this.applicationService.getApplicatations().subscribe(aplicacao => {
      this.aplicacoes.push(aplicacao);
    });
  }
}