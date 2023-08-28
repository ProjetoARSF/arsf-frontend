import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilXFuncionalidadeComponent } from './perfil-x-funcionalidade.component';

describe('PerfilXFuncionalidadeComponent', () => {
  let component: PerfilXFuncionalidadeComponent;
  let fixture: ComponentFixture<PerfilXFuncionalidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilXFuncionalidadeComponent]
    });
    fixture = TestBed.createComponent(PerfilXFuncionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
