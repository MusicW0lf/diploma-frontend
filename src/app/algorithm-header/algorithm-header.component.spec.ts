import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmHeaderComponent } from './algorithm-header.component';

describe('AlgorithmHeaderComponent', () => {
  let component: AlgorithmHeaderComponent;
  let fixture: ComponentFixture<AlgorithmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
