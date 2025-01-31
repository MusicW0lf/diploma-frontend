import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaboratoryEditorComponent } from './laboratory-editor.component';

describe('LaboratoryEditorComponent', () => {
  let component: LaboratoryEditorComponent;
  let fixture: ComponentFixture<LaboratoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
