import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Michael } from './michael';

describe('Michael', () => {
  let component: Michael;
  let fixture: ComponentFixture<Michael>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Michael]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Michael);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
