import { Type } from "@angular/core";
import { AnaliseRiscoComponent } from "src/app/components/analise-risco/analise-risco.component";
import { CargaEtlComponent } from "src/app/components/carga-etl/carga-etl.component";
import { PerfilXFuncionalidadeComponent } from "src/app/components/perfil-x-funcionalidade/perfil-x-funcionalidade.component";

export interface SideMenuOption {
  index?: number,
  label: string,
  urlLabel: string,
  component?: Type<any>
}

export const SIDE_MENU_OPTIONS: Array<SideMenuOption> = [
  { label: 'Inicío', urlLabel: '', component: null },
  { label: 'Aplicação', urlLabel: 'aplicacao', component: null },
  { label: 'Perfil', urlLabel: 'perfil', component: null },
  { label: 'Cadastro Usuário ARSF', urlLabel: 'cadastro-usuario-arsf', component: null },
  { label: 'Cadastro Usuário Aplicações', urlLabel: 'cadastro-usuario-aplicacoes', component: null },
  { label: 'Gestores', urlLabel: 'gestores', component: null },
  { label: 'Funcionalidades', urlLabel: 'funcionalidades', component: null },
  { label: 'Grupo de Perfis', urlLabel: 'grupos-de-perfis', component: null },
  { label: 'Permissões', urlLabel: 'permissoes', component: null },
  { label: 'Perfil x Funcionalidades', urlLabel: 'perfil-x-funcionalidades', component: PerfilXFuncionalidadeComponent },
  { label: 'Usuário X Perfis', urlLabel: 'usuario-x-perfis', component: null },
  { label: 'Usuário x Grupo de Perfis', urlLabel: 'usuario-x-grupo-de-perfis', component: null },
  { label: 'Grupo de Perfil x Perfil', urlLabel: 'grupo-de-perfil-x-perfil', component: null },
  { label: 'Matriz de Risco', urlLabel: 'matriz-de-risco', component: null },
  { label: 'Análise de Risco', urlLabel: 'analise-de-risco', component: AnaliseRiscoComponent },
  { label: 'Relatório de Usuários', urlLabel: 'relatorio-de-usuarios', component: null },
  { label: 'Relatório dos Perfis', urlLabel: 'relatorio-de-perfis', component: null },
  { label: 'Carga de Dados ETL', urlLabel: 'carga-etl', component: CargaEtlComponent },
];
