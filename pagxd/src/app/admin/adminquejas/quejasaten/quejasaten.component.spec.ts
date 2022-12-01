import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasatenComponent } from './quejasaten.component';

describe('QuejasatenComponent', () => {
  let component: QuejasatenComponent;
  let fixture: ComponentFixture<QuejasatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasatenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuejasatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
