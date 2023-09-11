import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SiteMenuComponent } from './components/shared/site-menu/site-menu.component';
import { CargaEtlComponent } from './components/carga-etl/carga-etl.component';
import { AnaliseRiscoComponent } from './components/analise-risco/analise-risco.component';
import { AuthGuard, LoginService, SessionService } from './core';
import { PerfilXFuncionalidadeComponent } from './components/perfil-x-funcionalidade/perfil-x-funcionalidade.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DualSelectComponent } from './components/shared/dual-select/dual-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SiteMenuComponent,
    CargaEtlComponent,
    AnaliseRiscoComponent,
    PerfilXFuncionalidadeComponent,
    ModalComponent,
    DualSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    AuthGuard,
    LoginService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, far, fas);
  }
}
