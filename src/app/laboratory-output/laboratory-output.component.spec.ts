import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryOutputComponent } from './laboratory-output.component';

describe('LaboratoryOutputComponent', () => {
  let component: LaboratoryOutputComponent;
  let fixture: ComponentFixture<LaboratoryOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
