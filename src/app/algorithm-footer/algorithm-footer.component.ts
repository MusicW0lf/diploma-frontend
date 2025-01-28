import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-algorithm-footer',
  templateUrl: './algorithm-footer.component.html',
  styleUrls: ['./algorithm-footer.component.css'],
})
export class AlgorithmFooterComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
