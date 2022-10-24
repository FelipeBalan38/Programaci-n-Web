import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondPComponent } from './fond-p.component';

describe('FondPComponent', () => {
  let component: FondPComponent;
  let fixture: ComponentFixture<FondPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
