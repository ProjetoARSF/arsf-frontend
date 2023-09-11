import { Injectable } from '@angular/core';
import { RiskAnalysisRepository } from '../repositories/risk-analysis.repository';
import { RiskModel } from '../models/risk.model';
import { UserRiskModel } from '../models/risks/user-risk.model';
import { RoleRiskModel } from '../models/risks/role-risk.model';
import { GroupRiskModel } from '../models/risks/group-risk.model';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { RiskTableModel } from '../models/risk-table.model';

@Injectable({
  providedIn: 'root'
})
export class RiskAnalysisService {

  constructor(private repository: RiskAnalysisRepository) { }

  public getApplicationRisks(appId: string): Observable<Array<RiskTableModel>> {
    const risks = new Array<RiskTableModel>();
    return this.getUsersRisk(appId)
      .pipe(
        switchMap((last) => {
          risks.push(new RiskTableModel('Riscos de Usuário', last))
          return this.getRolesRisk(appId);
        }),
        catchError((err) => this.getRolesRisk(appId))
      ).pipe(
        switchMap((last) => {
          risks.push(new RiskTableModel('Riscos de Função', last))
          return this.getGroupsRisk(appId);
        }),
        catchError((err) => this.getGroupsRisk(appId))
      ).pipe(
        switchMap((last) => {
          risks.push(new RiskTableModel('Riscos de Grupos de Funções', last))
          return of(risks);
        })
      );
  }

  public getUsersRisk(appId: string): Observable<Array<UserRiskModel>> {
    return this.repository.getUsersRisk(appId)
      .pipe(
        map((risks) => Object.assign(new RiskModel, risks))
      )
      .pipe(
        map((risks) => {
          const userRisks: Array<UserRiskModel> = new Array<UserRiskModel>();
          risks.getRows().forEach((risk) => userRisks.push(Object.assign(new UserRiskModel, risk)));
          return userRisks;
        })
      );
  }

  public getRolesRisk(appId: string): Observable<Array<RoleRiskModel>> {
    return this.repository.getRolesRisk(appId)
      .pipe(
        map((risks) => Object.assign(new RiskModel, risks))
      )
      .pipe(
        map((risks) => {
          const userRisks: Array<RoleRiskModel> = new Array<RoleRiskModel>();
          risks.getRows().forEach((risk) => userRisks.push(Object.assign(new RoleRiskModel, risk)));
          return userRisks;
        })
      );
  }

  public getGroupsRisk(appId: string): Observable<Array<GroupRiskModel>> {
    return this.repository.getGroupsRisk(appId)
      .pipe(
        map((risks) => Object.assign(new RiskModel, risks))
      )
      .pipe(
        map((risks) => {
          const userRisks: Array<GroupRiskModel> = new Array<GroupRiskModel>();
          risks.getRows().forEach((risk) => userRisks.push(Object.assign(new GroupRiskModel, risk)));
          return userRisks;
        })
      );
  }
}
