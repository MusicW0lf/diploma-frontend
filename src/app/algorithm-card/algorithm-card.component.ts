import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-algorithm-card',
  templateUrl: './algorithm-card.component.html',
  imports: [CommonModule],
  styleUrls: ['./algorithm-card.component.css']
})
export class AlgorithmCardComponent {
  @Input() cardClass: string = '';
  @Input() header: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() color1: string = '';
  @Input() color2: string = '';

  get gradient(): string {
    return `linear-gradient(135deg, ${this.color1}, ${this.color2})`;
  }

  viewMore() {
    if (this.link) {
      window.open(this.link, '_blank');
    }
  }
}