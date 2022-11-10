import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminquejasComponent } from './adminquejas.component';

describe('AdminquejasComponent', () => {
  let component: AdminquejasComponent;
  let fixture: ComponentFixture<AdminquejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminquejasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminquejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
