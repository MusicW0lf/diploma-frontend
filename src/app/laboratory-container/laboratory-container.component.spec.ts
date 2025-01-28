import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryContainerComponent } from './laboratory-container.component';

describe('LaboratoryContainerComponent', () => {
  let component: LaboratoryContainerComponent;
  let fixture: ComponentFixture<LaboratoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
