import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEtlComponent } from './carga-etl.component';

describe('CargaEtlComponent', () => {
  let component: CargaEtlComponent;
  let fixture: ComponentFixture<CargaEtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaEtlComponent]
    });
    fixture = TestBed.createComponent(CargaEtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
