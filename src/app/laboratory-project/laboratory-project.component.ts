import { Component } from '@angular/core';
import { Language } from '../laboratory/laboratory.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  imports: [CommonModule]
})
export class LaboratoryProjectComponent {
  // get randomColors(): string[] {
  //   return Array.from({ length: 2 }, () =>
  //     '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
  // );
  // }

  // language: Language | undefined = Language.Python;
  // project_name: string = 'Hello!';
}
