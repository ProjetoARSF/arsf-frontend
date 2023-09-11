import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualSelectComponent } from './dual-select.component';

describe('DualSelectComponent', () => {
  let component: DualSelectComponent;
  let fixture: ComponentFixture<DualSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DualSelectComponent]
    });
    fixture = TestBed.createComponent(DualSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
