import { Component } from '@angular/core';
import { LOGIN_HEADER_HEIGHT } from '@environment/environment';
import { LoginService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  protected readonly headerHeight: number = LOGIN_HEADER_HEIGHT;

  protected username: string = '';
  protected password: string = '';

  constructor(
    private loginService: LoginService
  ) { }

  protected onForgotPasswordClick(event: Event) {
    alert("Redirecionar para recuperação de senha");
  }

  protected async onLoginClick(event: Event) {
    this.loginService.login(this.username, this.password);
  }
}

