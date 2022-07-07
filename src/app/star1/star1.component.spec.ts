import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Star1Component } from './star1.component';

describe('Star1Component', () => {
  let component: Star1Component;
  let fixture: ComponentFixture<Star1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Star1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Star1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
