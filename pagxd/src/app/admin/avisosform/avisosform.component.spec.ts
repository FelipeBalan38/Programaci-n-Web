import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosformComponent } from './avisosform.component';

describe('AvisosformComponent', () => {
  let component: AvisosformComponent;
  let fixture: ComponentFixture<AvisosformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisosformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
