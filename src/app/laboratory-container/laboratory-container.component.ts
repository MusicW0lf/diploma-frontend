import { Component } from '@angular/core';
import { Language } from '../laboratory/laboratory.component';
import { LaboratoryProjectComponent } from '../laboratory-project/laboratory-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratory-container',
  standalone:true,
  imports: [LaboratoryProjectComponent, CommonModule],
  templateUrl: './laboratory-container.component.html',
  styleUrl: './laboratory-container.component.css'
})
export class LaboratoryContainerComponent {
  projects = [
    {
      project_name: 'Project 1',
      language: Language.Python,
      RandomColors: ['#123123', "#115a51"],
      link: 'https://link-to-algorithm1.com',
    },
    {
      project_name: 'Project 2',
      language: Language.Python,
      RandomColors: ['#123123', "#115a51"],
      link: 'https://link-to-algorithm1.com',
    },
    {
      project_name: 'Project 3',
      language: Language.Python,
      RandomColors: ['#123123', "#115a51"],
      link: 'https://link-to-algorithm1.com',
    },
    {
      project_name: 'Project 4',
      language: Language.Python,
      RandomColors: ['#123123', "#115a51"],
      link: 'https://link-to-algorithm1.com',
    },
    {
      project_name: 'Project 5',
      language: Language.Python,
      RandomColors: ['#123123', "#115a51"],
      link: '12',
    },
  ];
}
