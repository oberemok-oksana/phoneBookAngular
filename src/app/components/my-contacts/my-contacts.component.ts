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
  public activeContact: Contact | null = null;

  constructor(private contactsService: ContactsService) {
    this.loadContacts();
    this.contactsService.activeContactChange$.subscribe((contact) => {
      this.activeContact = contact;
    });
    this.contactsService.contactAdded$.subscribe(() => {
      this.loadContacts();
    });
  }

  loadContacts() {
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
}
