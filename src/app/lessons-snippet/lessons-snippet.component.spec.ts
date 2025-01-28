import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsSnippetComponent } from './lessons-snippet.component';

describe('LessonsSnippetComponent', () => {
  let component: LessonsSnippetComponent;
  let fixture: ComponentFixture<LessonsSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsSnippetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
