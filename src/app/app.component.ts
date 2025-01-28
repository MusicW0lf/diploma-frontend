import { Component } from '@angular/core';
import { AlgorithmContainerComponent } from './algorithm-container/algorithm-container.component';
import { AlgorithmFooterComponent } from './algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from './algorithm-header/algorithm-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-algorithm-header></app-algorithm-header>
  <app-algorithm-container></app-algorithm-container>
  <app-algorithm-footer></app-algorithm-footer>`,
  imports: [AlgorithmContainerComponent, AlgorithmFooterComponent, AlgorithmHeaderComponent]
})
export class AppComponent {}
