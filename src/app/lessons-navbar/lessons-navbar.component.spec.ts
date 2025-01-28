import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsNavbarComponent } from './lessons-navbar.component';

describe('LessonsNavbarComponent', () => {
  let component: LessonsNavbarComponent;
  let fixture: ComponentFixture<LessonsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
