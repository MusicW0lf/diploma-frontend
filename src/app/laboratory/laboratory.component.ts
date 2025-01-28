import { Component } from '@angular/core';
import { LaboratoryProjectComponent } from '../laboratory-project/laboratory-project.component';

@Component({
  selector: 'app-laboratory',
  imports: [LaboratoryProjectComponent],
  template: `<app-project-card></app-project-card>`,
  styleUrl: './laboratory.component.css'
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
