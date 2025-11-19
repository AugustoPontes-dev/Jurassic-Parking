import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastrotela } from './cadastrotela';

describe('Cadastrotela', () => {
  let component: Cadastrotela;
  let fixture: ComponentFixture<Cadastrotela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastrotela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastrotela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
