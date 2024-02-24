import {Component, signal} from '@angular/core';
import {MOCK_USERS, User} from "./user.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  readonly currentUser = signal<User | null>(null);
  readonly users = MOCK_USERS;

  selectUser(user: User): void {
    this.currentUser.set(user);
    console.log('user',user)
  }

  some() {
    const user = this.currentUser();
    if (user) {
      ///
    }
  }
}
