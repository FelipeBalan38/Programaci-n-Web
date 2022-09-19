import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPComponent } from './fondo-p.component';

describe('FondoPComponent', () => {
  let component: FondoPComponent;
  let fixture: ComponentFixture<FondoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
