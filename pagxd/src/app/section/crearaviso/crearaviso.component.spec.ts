import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearavisoComponent } from './crearaviso.component';

describe('CrearavisoComponent', () => {
  let component: CrearavisoComponent;
  let fixture: ComponentFixture<CrearavisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearavisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearavisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
