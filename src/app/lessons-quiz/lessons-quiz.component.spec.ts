import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsQuizComponent } from './lessons-quiz.component';

describe('LessonsQuizComponent', () => {
  let component: LessonsQuizComponent;
  let fixture: ComponentFixture<LessonsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
