import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLogin } from './box-login';

describe('BoxLogin', () => {
  let component: BoxLogin;
  let fixture: ComponentFixture<BoxLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
