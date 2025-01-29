import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryLanguageComponent } from './laboratory-language.component';

describe('LaboratoryLanguageComponent', () => {
  let component: LaboratoryLanguageComponent;
  let fixture: ComponentFixture<LaboratoryLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
