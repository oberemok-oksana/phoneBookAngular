import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { ContactsService } from '../services/contacts/contacts.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public auth = false;
  public activeContact$ = this.contactsService.getActiveContact();
  public emptyField: boolean = false;

  constructor(
    private contactsService: ContactsService,
    private authService: AuthService
  ) {
    this.authService.login$.subscribe(() => {
      this.auth = true;
    });
    this.authService.logout$.subscribe(() => {
      this.auth = false;
    });
  }

  logout() {
    this.authService.logout();
  }
}
