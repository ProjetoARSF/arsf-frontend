import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EtlService } from 'src/app/shared/services/etl.service';

@Component({
  selector: 'app-carga-etl',
  templateUrl: './carga-etl.component.html',
  styleUrls: ['./carga-etl.component.scss']
})
export class CargaEtlComponent {

  private readonly SUCCESS = 'successfully';

  @ViewChild('confirmButton')
  protected confirmButton: ElementRef<HTMLButtonElement>;

  protected status: 1 | 0 | -1 = 0;

  etlExecutionSubscription: Subscription;

  constructor(
    private router: Router,
    private etlService: EtlService
  ) { }

  protected execute(): void {
    this.status = 0;
    this.confirmButton.nativeElement.setAttribute('disabled', '');
    this.etlExecutionSubscription = this.etlService.executeETL().subscribe({
      next: (next) => {
        if (next.includes(this.SUCCESS)) {
          this.status = 1;
        }
      },
      error: (err) => {
        this.status = -1;
      },
      complete: () => {
        this.resetForm();
      }
    });
  }

  protected exit(): void {
    this.resetForm();
    this.router.navigate(['home']);
  }

  private resetForm() {
    this.etlExecutionSubscription?.unsubscribe
    setTimeout(() => this.confirmButton.nativeElement.removeAttribute('disabled'), 2000);
  }

}
