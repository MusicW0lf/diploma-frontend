import { Component } from '@angular/core';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';
import { LessonsNavbarComponent } from '../lessons-navbar/lessons-navbar.component';

@Component({
  selector: 'app-lessons',
  imports: [AlgorithmFooterComponent, AlgorithmHeaderComponent,
            LessonsNavbarComponent
  ],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {

}
