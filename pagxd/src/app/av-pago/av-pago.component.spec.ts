import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPagoComponent } from './av-pago.component';

describe('AvPagoComponent', () => {
  let component: AvPagoComponent;
  let fixture: ComponentFixture<AvPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
