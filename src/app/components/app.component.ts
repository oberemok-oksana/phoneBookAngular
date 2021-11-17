import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { ContactsService } from '../services/contacts/contacts.service';
import { AuthService } from '../services/auth/auth.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public auth = false;
  public activeContact: Contact | null = null;
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
    this.contactsService.activeContactChange$.subscribe((contact) => {
      this.activeContact = contact!;
    });
  }

  logout() {
    this.authService.logout();
  }
}
