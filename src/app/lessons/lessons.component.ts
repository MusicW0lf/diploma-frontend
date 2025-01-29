import { Component } from '@angular/core';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';

@Component({
  selector: 'app-lessons',
  imports: [AlgorithmFooterComponent, AlgorithmHeaderComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {

}
