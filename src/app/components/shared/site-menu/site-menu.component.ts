import { Component, EventEmitter, Output } from '@angular/core';
import { SIDE_MENU_WIDTH } from '@environment/environment';
import { SIDE_MENU_OPTIONS, SideMenuOption } from '@environment/side-menu.environment';
import { SessionService } from 'src/app/core';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss']
})
export class SiteMenuComponent {

  @Output() onOptionChange: EventEmitter<any> = new EventEmitter<any>();

  protected componentWidth: number = SIDE_MENU_WIDTH;
  protected options: Array<SideMenuOption> = SIDE_MENU_OPTIONS;

  constructor(
    private sessionService: SessionService
  ) { }

  protected onOptionClick(event: Event): void {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    const value: number = Number(target.getAttribute('value'));

    this.onOptionChange.emit(value);
  }

  protected onClickLogout(event: Event): void {
    this.sessionService.destroySession();
  }
}
