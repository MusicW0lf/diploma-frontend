import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaboratoryContainerComponent } from '../laboratory-container/laboratory-container.component';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css',
  imports: [LaboratoryContainerComponent],
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
