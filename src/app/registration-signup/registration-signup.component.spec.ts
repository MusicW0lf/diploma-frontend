import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSignupComponent } from './registration-signup.component';

describe('RegistrationSignupComponent', () => {
  let component: RegistrationSignupComponent;
  let fixture: ComponentFixture<RegistrationSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
