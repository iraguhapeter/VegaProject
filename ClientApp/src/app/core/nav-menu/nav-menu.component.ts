import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private userService: UserService) { }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
}
