import { Component } from '@angular/core';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent {

  options: Array<string> = [
    'Inicío', 'Aplicação', 'Perfil', 'Cadastro Usuário ARSF', 'Cadastro Usuário Aplicações', 'Gestores', 
    'Funcionalidades', 'Grupo de Perfis', 'Permissões', 'Perfil x Funcionalidades', 'Usuário X Perfis', 
    'Usuário x Grupo de Perfis', 'Grupo de Perfil x Perfil', 'Matriz de Risco', 'Análise de Risco', 'Relatório de Usuários', 
    'Relatório dos Perfis', 'Carga de Dados ETL'
  ]
}
