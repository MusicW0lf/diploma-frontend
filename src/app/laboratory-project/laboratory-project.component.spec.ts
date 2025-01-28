import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryProjectComponent } from './laboratory-project.component';

describe('LaboratoryProjectComponent', () => {
  let component: LaboratoryProjectComponent;
  let fixture: ComponentFixture<LaboratoryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
