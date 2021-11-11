import { Component } from '@angular/core';
import { UsersService } from './services/users/users.service';
import { ContactsService } from './services/contacts/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currentUser$ = this.usersService.getCurrentUser();
  public activeContact$ = this.contactsService.getActiveContact();

  public emptyField: boolean = false;

  constructor(
    private usersService: UsersService,
    private contactsService: ContactsService
  ) {}

  logout() {
    this.usersService.logout();
  }
}
