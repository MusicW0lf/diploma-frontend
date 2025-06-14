import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaboratoryComponent } from './laboratory.component';

describe('LaboratoryComponent', () => {
  let component: LaboratoryComponent;
  let fixture: ComponentFixture<LaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
