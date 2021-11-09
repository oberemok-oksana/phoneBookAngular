import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../services/contacts/contacts.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css'],
})
export class MyContactsComponent {
  public contacts$ = this.contactsService.getContacts();
  public activeContact$ = this.contactsService.getActiveContact();
  constructor(private contactsService: ContactsService) {}

  setToActive(contact: Contact) {
    this.contactsService.setToActive(contact);
  }
  deleteContact(contact: Contact) {
    this.contactsService.deleteContact(contact);
  }
}
