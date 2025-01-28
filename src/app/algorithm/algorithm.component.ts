import { Component } from '@angular/core';
import { AlgorithmContainerComponent } from '../algorithm-container/algorithm-container.component';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';

@Component({
  selector: 'app-algorithm',
  imports: [AlgorithmContainerComponent, AlgorithmFooterComponent, AlgorithmHeaderComponent],
  templateUrl: './algorithm.component.html',
  styleUrl: './algorithm.component.css'
})
export class AlgorithmComponent {

}
