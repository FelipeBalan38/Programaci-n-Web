import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosAdministradorComponent } from './pagos-administrador.component';

describe('PagosAdministradorComponent', () => {
  let component: PagosAdministradorComponent;
  let fixture: ComponentFixture<PagosAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
