import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { RiskTableModel } from 'src/app/shared/models/risk-table.model';
import { ApplicationService } from 'src/app/shared/services/application.service';
import { RiskAnalysisService } from 'src/app/shared/services/risk-analkysis.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-analise-risco',
  templateUrl: './analise-risco.component.html',
  styleUrls: ['./analise-risco.component.scss']
})
export class AnaliseRiscoComponent implements OnInit {

  protected applications: Array<ApplicationModel> = new Array<ApplicationModel>();
  protected riskTables: Array<RiskTableModel> = new Array<RiskTableModel>();

  protected application: ApplicationModel;
  protected isRequesting: boolean = false;

  private risksSubscription: Subscription;

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private riskAnalysisService: RiskAnalysisService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.applications = this.applicationService.getApplicatations();
  }

  protected onClickGenerate(): void {
    if (!this.application.getIdApp()) return;
    this.isRequesting = true;
    this.clearRisks();
    this.getRisks();
  }

  protected onClickExit(): void {
    this.router.navigate(['home']);
  }

  protected canGenerate(): boolean {
    return !this.application || this.isRequesting;
  }

  private createEmailModal(): void {
    const modal = this.viewContainerRef.createComponent(ModalComponent);
    modal.setInput('title', 'Análise de Risco - Email');
    modal.setInput('message', 'Deseja enviar um email para os gestores com o resultado da análise?');
    modal.setInput('confirmLabel', 'Sim');
    modal.setInput('closeLabel', 'Não');
    modal.instance.afterConfirm.subscribe((next) => { this.sendEmailMock(); });
  }

  private clearRisks(): void {
    this.riskTables = new Array<RiskTableModel>();
  }

  private getRisks(): void {
    this.risksSubscription = this.riskAnalysisService.getApplicationRisks(this.application.getIdApp()).subscribe({
      next: (next) => this.riskTables = next,
      error: (err) => console.log(err),
      complete: () => {
        this.risksSubscription.unsubscribe();
        setTimeout(() => {
          this.isRequesting = false;
          this.createEmailModal();
        }, 500);
      }
    });
  }

  private sendEmailMock(): void {
    alert('Email enviado para os gestores');
  }
}
