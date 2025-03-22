import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';

@Component({
  selector: 'app-user',
  imports: [UserProfileComponent, AlgorithmHeaderComponent, AlgorithmFooterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
