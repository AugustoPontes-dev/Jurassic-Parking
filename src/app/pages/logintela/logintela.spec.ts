import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logintela } from './logintela';

describe('Logintela', () => {
  let component: Logintela;
  let fixture: ComponentFixture<Logintela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logintela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logintela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
