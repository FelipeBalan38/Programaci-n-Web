import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadoPagComponent } from './aprobado-pag.component';

describe('AprobadoPagComponent', () => {
  let component: AprobadoPagComponent;
  let fixture: ComponentFixture<AprobadoPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobadoPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobadoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
