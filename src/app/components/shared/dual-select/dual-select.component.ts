import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selectable } from 'src/app/shared/interfaces/selectable';

@Component({
  selector: 'app-dual-select',
  templateUrl: './dual-select.component.html',
  styleUrls: ['./dual-select.component.scss']
})
export class DualSelectComponent {

  @Input() public id: string = 'dual';
  @Input() public label: string = 'Dual Select';
  @Input() public leftOptions: Array<Selectable> = new Array<Selectable>();
  @Input() public rightOptions: Array<Selectable> = new Array<Selectable>();

  @Input() public disabled: boolean = false;

  @Output() public clickAddLeftEvent: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() public clickAddRightEvent: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  @Output() public clickRightOptionEvent: EventEmitter<string> = new EventEmitter<string>();

  protected leftSelectId(): string {
    return this.id.concat('Left');
  }

  protected rightSelectId(): string {
    return this.id.concat('Right');
  }

  protected onClickAddLeft(select: HTMLSelectElement): void {
    const selectedOptions = select.selectedOptions;
    const selectedIds: Array<string> = new Array<string>();

    for (let i = 0; i < selectedOptions.length; i++) {
      const element = selectedOptions.item(i);
      selectedIds.push(element.value);
    }

    this.clickAddLeftEvent.emit(selectedIds);
  }

  protected onClickAddRight(select: HTMLSelectElement): void {
    const selectedOptions = select.selectedOptions;
    const selectedIds: Array<string> = new Array<string>();

    for (let i = 0; i < selectedOptions.length; i++) {
      const element = selectedOptions.item(i);
      selectedIds.push(element.value);
    }
    this.clickAddRightEvent.emit(selectedIds);
  }

  protected onClickRightOption(event: Event, select: HTMLSelectElement): void {
    const keyboardEvent: KeyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.ctrlKey || select.selectedOptions.length != 1) {
      this.clickRightOptionEvent.emit('unselected');
      return;
    }

    const target: HTMLOptionElement = event.target as HTMLOptionElement;
    this.clickRightOptionEvent.emit(target.value);
  }
}
