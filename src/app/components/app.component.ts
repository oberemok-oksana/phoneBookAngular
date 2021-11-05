import { Component } from '@angular/core';
import { User } from '../models/user';
import { Login } from '../models/login';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public user: User = new User('', '', '');
  public login: Login = new Login('', '');
  public users: User[] = [new User('Oksana', '12345', '123345')];
  public currentUser?: User;
  public contact: Contact = new Contact('', 'phone', '');
  public contacts: Contact[] = [];
  public filteredContacts: Contact[] = this.contacts;
  public types: string[] = ['phone', 'email'];
  public activeContact: Contact | null = null;
  public showModal: boolean = false;
  public message?: string;
  public emptyField: boolean = false;
  public searchText: string = '';
  public searchType: 'find-by-name' | 'find-by-value' = 'find-by-name';

  signup() {
    if (
      this.user.login === '' ||
      this.user.password === '' ||
      this.user.birthdate === ''
    ) {
      this.showModalMessage('Please, fill out all the fields');
    } else {
      this.users.push(this.user);
      this.user = new User('', '', '');
    }
  }

  signin(login: string, password: string) {
    if (this.login.login === '' || this.login.password === '') {
      this.showModalMessage('Please, fill out all the fields');
    } else {
      this.currentUser = this.users.find((u) => {
        return u.login === login && u.password === password;
      });
      if (!this.currentUser) {
        this.showModalMessage('Wrong login or password');
      }
    }
  }

  addContact(name: string, type: string, value: string) {
    if (
      this.contact.name === '' ||
      this.contact.type === '' ||
      this.contact.value === ''
    ) {
      this.showModalMessage('Please, fill out all the fields');
    } else {
      this.contacts.push(new Contact(name, type, value));
      this.contact = new Contact('', 'phone', '');
      this.showFilteredContacts();
    }
  }

  setToActive(contact: Contact) {
    this.activeContact = contact;
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((c) => c !== contact);
    if (this.activeContact === contact) {
      this.activeContact = null;
    }
    this.showFilteredContacts();
  }

  showFilteredContacts() {
    if (this.searchType === 'find-by-name') {
      this.filteredContacts = this.contacts.filter((c) =>
        c.name
          .toLocaleLowerCase()
          .startsWith(this.searchText.toLocaleLowerCase())
      );
    } else {
      this.filteredContacts = this.contacts.filter((c) =>
        c.value
          .toLocaleLowerCase()
          .startsWith(this.searchText.toLocaleLowerCase())
      );
    }
  }

  resetFindContact() {
    this.activeContact = null;
    this.filteredContacts = this.contacts;
  }

  logout() {
    this.currentUser = undefined;
    this.login = new Login('', '');
  }

  showModalMessage(message: string) {
    this.message = message;
    this.showModal = true;
  }
}
