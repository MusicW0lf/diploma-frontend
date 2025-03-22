import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profileImage: string | null = 'assets/profile.jpg'; // Якщо фото немає, буде null або ''

  constructor() {
    // Симуляція відсутнього зображення
    if (!this.profileImage) {
      this.profileImage = 'assets/default-profile.png'; // Шлях до стандартного фото
    }
  }
}
