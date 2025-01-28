import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsLessonComponent } from './lessons-lesson.component';

describe('LessonsLessonComponent', () => {
  let component: LessonsLessonComponent;
  let fixture: ComponentFixture<LessonsLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
