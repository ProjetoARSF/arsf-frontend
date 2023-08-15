import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoComponent } from './analise-risco.component';

describe('AnaliseRiscoComponent', () => {
  let component: AnaliseRiscoComponent;
  let fixture: ComponentFixture<AnaliseRiscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnaliseRiscoComponent]
    });
    fixture = TestBed.createComponent(AnaliseRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
