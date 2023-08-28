import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SESSION_COOKIE, SESSION_EXPIRATION_TIME } from "@environment/environment";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class SessionService {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  /**
   * Verifica se existe sessão ativa
   * @returns true caso exista sessão e false caso não exista
   */
  public hasActiveSession(): boolean {
    return this.cookieService.check(SESSION_COOKIE);
  }

  /**
   * Cria um novo cookie de sessão para persistir o usuário
   * @param data valor que será armazenado no cookie
   * @returns
   */
  public createSession(data: string): void {
    if (!data || data?.trim().length == 0 || data?.trim() === '') return;
    if (this.hasActiveSession()) return;

    const expire = this.getExpirationTime();
    console.log(expire)

    this.cookieService.set(SESSION_COOKIE, data, { expires: expire, path: '**' });

    if (this.router.routerState.snapshot.url === '/login') {
      this.router.navigate(['home']);
    }
  }

  /**
   * Destroí a sessão ativa caso ela exista
   * @returns
   */
  public destroySession(): void {
    if (!this.hasActiveSession()) return;
    this.cookieService.delete(SESSION_COOKIE, '/');
    this.router.navigate(['login']);
  }

  /**
   * Recria o cookie de sessão atualizando seu tempo de expiração
   * @returns
   */
  public refreshSession(): void {
    if (!this.hasActiveSession()) return;
    this.createSession(this.cookieService.get(SESSION_COOKIE));
  }

  /**
   * Gera a data de expiração do cookie de sessão
   * @returns tempo de expiração em milisegundos
   */
  private getExpirationTime(): Date {
    return new Date(new Date().getTime() + SESSION_EXPIRATION_TIME);
  }
}
