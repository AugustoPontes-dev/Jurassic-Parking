import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telausuario } from './telausuario';

describe('Telausuario', () => {
  let component: Telausuario;
  let fixture: ComponentFixture<Telausuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telausuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telausuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
