import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPagadoComponent } from './pago-pagado.component';

describe('PagoPagadoComponent', () => {
  let component: PagoPagadoComponent;
  let fixture: ComponentFixture<PagoPagadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoPagadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoPagadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
