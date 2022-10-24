import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmComponent } from './list-em.component';

describe('ListEmComponent', () => {
  let component: ListEmComponent;
  let fixture: ComponentFixture<ListEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
