import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoIniComponent } from './fondo-ini.component';

describe('FondoIniComponent', () => {
  let component: FondoIniComponent;
  let fixture: ComponentFixture<FondoIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoIniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
