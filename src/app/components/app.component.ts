import { Component } from '@angular/core';
import { User } from '../models/user';
import { Login } from '../models/login';
import { Contact } from '../models/contact';
import { ModalService } from './services/modal/modal.service';
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
    private modalService: ModalService,
    private usersService: UsersService,
    private contactsService: ContactsService
  ) {}

  showFilteredContacts() {
    //   if (this.searchType === 'find-by-name') {
    //     this.filteredContacts = this.contacts.filter((c) =>
    //       c.name
    //         .toLocaleLowerCase()
    //         .startsWith(this.searchText.toLocaleLowerCase())
    //     );
    //   } else {
    //     this.filteredContacts = this.contacts.filter((c) =>
    //       c.value
    //         .toLocaleLowerCase()
    //         .startsWith(this.searchText.toLocaleLowerCase())
    //     );
    //   }
  }

  logout() {
    this.usersService.logout();
  }
}
