import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmFooterComponent } from './algorithm-footer.component';

describe('AlgorithmFooterComponent', () => {
  let component: AlgorithmFooterComponent;
  let fixture: ComponentFixture<AlgorithmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
