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
  public types: string[] = ['phone', 'email'];
  public contact: Contact = new Contact('', 'phone', '');
  public searchText: string = '';
  public searchType: 'find-by-name' | 'find-by-value' = 'find-by-name';
  public currentUser$ = this.usersService.getCurrentUser();
  public activeContact$ = this.contactsService.getActiveContact();

  public emptyField: boolean = false;

  constructor(
    private modalService: ModalService,
    private usersService: UsersService,
    private contactsService: ContactsService
  ) {}

  addContact(name: string, type: string, value: string) {
    if (
      this.contact.name === '' ||
      this.contact.type === '' ||
      this.contact.value === ''
    ) {
      this.modalService.showModalMessage('Please, fill out all the fields');
    } else {
      this.contactsService.addContact(new Contact(name, type, value));
      this.contact = new Contact('', 'phone', '');
    }
  }

  // deleteContact(contact: Contact) {
  //   this.contacts = this.contacts.filter((c) => c !== contact);
  //   if (this.activeContact === contact) {
  //     this.activeContact = null;
  //   }
  //   this.showFilteredContacts();
  // }

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

  resetFindContact() {
    this.contactsService.setToActive(null);
  }

  logout() {
    this.usersService.logout();
  }
}
