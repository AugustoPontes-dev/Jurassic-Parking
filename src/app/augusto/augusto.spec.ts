import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Augusto } from './augusto';

describe('Augusto', () => {
  let component: Augusto;
  let fixture: ComponentFixture<Augusto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Augusto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Augusto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
