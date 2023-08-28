import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthGuard {

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  authenticate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasSession: boolean = this.sessionService.hasActiveSession();
    const segments = this.getUrlSegments(state);

    if (!hasSession && segments[0] === 'login') {
      return true;
    } else if (!hasSession) {
      this.router.navigate(['login']);
      return true;
    }

    if (segments[0] === 'home') {
      return true;
    }

    this.handleUrl(segments);

    return true;
  }

  private handleUrl(segments: Array<string>): void {
    if (segments[0] !== 'home') {
      this.router.navigate(['home']);
      return;
    }
    this.router.navigate(segments);
  }

  private getUrlSegments(state: RouterStateSnapshot): Array<string> {
    return state.url.split('/').filter(s => s !== '');
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const guard: AuthGuard = inject(AuthGuard);
  return guard.authenticate(route, state);
};
