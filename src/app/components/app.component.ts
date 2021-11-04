import { Component } from '@angular/core';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
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
  public currentUser: User | undefined = undefined;
  public contact: Contact = new Contact('', '', '');
  public contacts: Contact[] = [
    new Contact('Boba', 'phone', '09956874585'),
    new Contact('Puma', 'email', 'puma@gmail.com'),
  ];
  public types: string[] = ['phone', 'email'];
  public activeContact: Contact | null = null;

  addUser() {
    this.users.push(this.user);
    this.user = new User('', '', '');
    console.log(this.users);
  }

  findUser(login: string, password: string) {
    this.currentUser = this.users.find((u) => {
      return u.login === login && u.password === password;
    });

    console.log(this.currentUser);
  }

  addContact(name: string, type: string, value: string) {
    this.contacts.push(new Contact(name, type, value));
    this.contact = new Contact('', '', '');
    console.log(this.contacts);
  }

  setToActive(contact: Contact) {
    this.activeContact = contact;
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter((c) => c !== contact);
  }
}
