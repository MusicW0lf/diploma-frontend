import { Component, Input } from '@angular/core';
import { Language } from '../laboratory/laboratory.component';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
@Component({
  selector: 'app-laboratory-project',
  templateUrl: './laboratory-project.component.html',
  styleUrls: ['./laboratory-project.component.css'],
  imports:[CommonModule, RouterModule]
})
export class LaboratoryProjectComponent {
  @Input() project_name: string = '';  // Receive the project name
  @Input()  project_id: string = '';
  @Input() language: Language = Language.Python;  // Receive the project language
  @Input() RandomColors: string[] = [];  // Receive the colors
  @Input() link: string = '';  // Receive the link
}
