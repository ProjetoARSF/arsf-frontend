import { Component, ElementRef, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string = '';
  @Input() message: string = '';

  @Input() confirmLabel: string = '';
  @Input() closeLabel: string = '';

  @Output() afterConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() afterClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private self: ElementRef
  ) { }

  protected onConfirm(): void {
    this.afterConfirm.emit(true);
    this.closeModal();
  }

  protected onClose(): void {
    this.afterClose.emit(true);
    this.closeModal();
  }

  private closeModal(): void {
    const nativeElement = this.self.nativeElement;
    nativeElement.parentElement.removeChild(nativeElement);
  }
}
