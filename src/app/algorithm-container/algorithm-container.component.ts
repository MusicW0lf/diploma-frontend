import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgorithmCardComponent } from '../algorithm-card/algorithm-card.component'; // Import the card component

@Component({
  selector: 'app-algorithm-container',
  standalone: true,
  templateUrl: './algorithm-container.component.html',
  styleUrls: ['./algorithm-container.component.css'],
  imports: [CommonModule, AlgorithmCardComponent]
})
export class AlgorithmContainerComponent {
  algorithmCards = [
    {
      cardClass: 'card-class-1',
      header: 'Neural Network',
      description: "A Neural Network is a machine learning model designed to mimic the human brain's processing of information. It consists of interconnected neurons that help recognize patterns in data, used in applications like image recognition and language processing",
      link: 'https://link-to-algorithm1.com',
      color1: '#A8E6CF',
      color2: '#F5E6CC'
    },
    {
      cardClass: 'card-class-2',
      header: 'Gen AI',
      description: 'Generative AI creates new content based on patterns learned from existing data. Models like GPT and DALL·E generate text, images, and audio for creative industries, software development, and content generation.',
      link: 'https://link-to-algorithm2.com',
      color1: '#F5E6CC',
      color2: '#A8E6CF'
    }
    ,
    {
      cardClass: 'card-class-2',
      header: 'CV',
      description: "Computer Vision enables computers to analyze visual data, like images and videos, using techniques for recognition, detection, and segmentation. It's used in interpreting and making decisions from visual information.",
      link: 'https://link-to-algorithm2.com',
      color1: '#A8E6CF',
      color2: '#F5E6CC'
    }
    ,
    {
      cardClass: 'card-class-2',
      header: 'Cryptography',
      description: "Cryptography secures information by encrypting data to keep it safe from unauthorized access. It's vital for online transactions, data protection, and secure communications.",
      link: 'https://link-to-algorithm2.com',
      color1: '#F5E6CC',
      color2: '#A8E6CF'
    }
    ,
    {
      cardClass: 'card-class-2',
      header: 'Theory of Games',
      description: "Theory of Games is a mathematical framework for analyzing decision-making in competitive scenarios. It helps understand optimal strategies in economics, politics, and computer science.",
      link: 'https://link-to-algorithm2.com',
      color1: '#A8E6CF',
      color2: '#F5E6CC'
    }
  ];
}
