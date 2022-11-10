import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpagosComponent } from './adminpagos.component';

describe('AdminpagosComponent', () => {
  let component: AdminpagosComponent;
  let fixture: ComponentFixture<AdminpagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
