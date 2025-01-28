import { Component } from '@angular/core';
import { AlgorithmContainerComponent } from './algorithm-container/algorithm-container.component';
import { AlgorithmFooterComponent } from './algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from './algorithm-header/algorithm-header.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';

@Component({
  selector: 'app-root',
  template: `
  <app-laboratory></app-laboratory>
  <app-algorithm-header></app-algorithm-header>
  <app-algorithm-container></app-algorithm-container>
  <app-algorithm-footer></app-algorithm-footer>`,
  imports: [AlgorithmContainerComponent, AlgorithmFooterComponent, AlgorithmHeaderComponent, LaboratoryComponent]
})
export class AppComponent {}
