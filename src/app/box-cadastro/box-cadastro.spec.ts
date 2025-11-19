import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCadastro } from './box-cadastro';

describe('BoxCadastro', () => {
  let component: BoxCadastro;
  let fixture: ComponentFixture<BoxCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
