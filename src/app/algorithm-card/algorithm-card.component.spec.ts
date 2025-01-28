import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmCardComponent } from './algorithm-card.component';

describe('AlgorithmCardComponent', () => {
  let component: AlgorithmCardComponent;
  let fixture: ComponentFixture<AlgorithmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
