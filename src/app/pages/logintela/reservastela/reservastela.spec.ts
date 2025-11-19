import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservastela } from './reservastela';

describe('Reservastela', () => {
  let component: Reservastela;
  let fixture: ComponentFixture<Reservastela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservastela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservastela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
