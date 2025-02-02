import { Component, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var Prism: any;

@Component({
  selector: 'app-laboratory-editor',
  imports: [FormsModule, CommonModule],
  templateUrl: './laboratory-editor.component.html',
  styleUrl: './laboratory-editor.component.css'
})
export class LaboratoryEditorComponent implements AfterViewChecked {
  pythonCode: string = '';
  highlightedCode: string = '';
  output: string = '';
  error: string = '';
  projectName: string = 'Bruh';
  isModalOpen: boolean = false;

  constructor(private http: HttpClient) {}

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  renameProject() {
    console.log('Renamed project to:', this.projectName);
    this.closeModal();
  }

  deleteProject() {
    console.log('Project deleted');
  }

  handleTab(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      this.pythonCode =
        this.pythonCode.substring(0, start) +
        '\t' +
        this.pythonCode.substring(end);

      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  }

  updatePreview() {
    setTimeout(() => {
      if (typeof Prism !== 'undefined') {
        this.highlightedCode = Prism.highlight(
          this.pythonCode,
          Prism.languages.python,
          'python'
        );
      }
    }, 0);
  }

  ngAfterViewChecked() {
    Prism.highlightAll();
  }

  executeCode() {
    this.http
      .post('/laboratory/execute/', {
        code: this.pythonCode,
        project_id: '123',
      })
      .subscribe(
        (response: any) => {
          this.output = response.stdout || 'No Output';
          this.error = response.error || 'No Errors';
        },
        (err) => {
          this.error = 'Error: ' + err.message;
        }
      );
  }
}
