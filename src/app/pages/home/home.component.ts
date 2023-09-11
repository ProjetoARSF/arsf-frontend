import { AfterContentInit, AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_HEADER_HEIGHT } from '@environment/environment';
import { SIDE_MENU_OPTIONS, SideMenuOption } from '@environment/side-menu.environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  protected readonly headerHeight: number = HOME_HEADER_HEIGHT;

  @ViewChild('content', { read: ViewContainerRef })
  protected contentContainer: ViewContainerRef;
  protected contentComponent: ComponentRef<any>;

  protected currentWindow: number = 0;

  constructor(private router: Router) { }

  public ngAfterViewInit(): void {
    this.handleUrl();
  }

  protected changeWindow(event: Event): void {
    const optionNumber = Number(event);
    const option = SIDE_MENU_OPTIONS.at(optionNumber);

    if (!option || option.urlLabel === '') {
      return;
    }

    this.router.navigate(['home', option.urlLabel]);
    this.createComponent(option);
  }

  private handleUrl(): void {
    const segments = this.getUrlSegments();
    if (segments.length === 1 && segments[0] === 'home') {
      return;
    }

    const option = SIDE_MENU_OPTIONS.filter(o => o.urlLabel === segments[1])[0];
    if (!option) {
      this.router.navigate(['home']);
      return;
    }
    this.createComponent(option);
  }

  private createComponent(option: SideMenuOption): void {
    if (this.contentComponent) { this.contentComponent.destroy(); }
    this.contentComponent = this.contentContainer.createComponent(option.component);
  }

  private getUrlSegments(): Array<string> {
    return this.router.url.split('/').filter(s => s !== '');
  }
}
