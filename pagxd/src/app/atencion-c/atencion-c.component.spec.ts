import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionCComponent } from './atencion-c.component';

describe('AtencionCComponent', () => {
  let component: AtencionCComponent;
  let fixture: ComponentFixture<AtencionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
