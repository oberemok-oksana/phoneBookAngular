import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css'],
})
export class MyContactsComponent {
  public contacts: Contact[] = [];
  public activeContact$ = this.contactsService.getActiveContact();

  constructor(private contactsService: ContactsService) {
    this.contactsService.getContacts().subscribe((response) => {
      if (response.status === 'ok') {
        this.contacts = response.contacts;
      } else {
        alert('Something went wrong');
      }
    });
  }

  setToActive(contact: Contact) {
    this.contactsService.setToActive(contact);
  }

  deleteContact(contact: Contact) {
    this.contactsService.deleteContact(contact);
  }
}
