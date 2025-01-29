import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratoryContainerComponent } from '../laboratory-container/laboratory-container.component';
import { LaboratoryLanguageComponent } from '../laboratory-language/laboratory-language.component';
import { LaboratoryModalComponent } from '../laboratory-modal/laboratory-modal.component';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css',
  imports: [LaboratoryLanguageComponent, LaboratoryModalComponent,
            AlgorithmFooterComponent, AlgorithmHeaderComponent
  ],
})
export class LaboratoryComponent {

}

export enum Language {
  Python = 'Python',
  Java = 'Java',
  JavaScript = 'Javascript',
  Ruby = 'Ruby',
  Go = 'Go',
  Cpp = 'C++',
  PHP = 'PHP',
  Swift = 'Swift',
  Kotlin = 'Kotlin',
  Csharp = 'C#'
}
