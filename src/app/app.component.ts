import { Component } from '@angular/core';
import { AlgorithmContainerComponent } from './algorithm-container/algorithm-container.component';
import { AlgorithmFooterComponent } from './algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from './algorithm-header/algorithm-header.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="header-empty"></div>
  <app-algorithm-header></app-algorithm-header>


  <main>
    <div class="content-section">
        <div class="text-content">
            <h1>Unlock the Power of Algorithms</h1>
            <p>Explore a comprehensive library of programming algorithms designed for every skill level</p>
        </div>
    </div>

    <app-algorithm-container></app-algorithm-container>
    
    <div class="laboratory-section">
        <h2>AlgoLib Laboratory</h2>
        <p>Ability to program directly from the site without installation</p>
        <div class="video-container">
            <p>Video content goes here</p>
        </div>
    </div>
  </main>


  <app-algorithm-footer></app-algorithm-footer>
  `,
  styleUrls: ['./app.component.css'],
  imports: [AlgorithmContainerComponent, AlgorithmFooterComponent, AlgorithmHeaderComponent]
})
export class AppComponent {}
