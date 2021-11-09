import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts = new BehaviorSubject<Contact[]>([
    new Contact('Boba', 'phone', '06446486'),
  ]);
  // public filteredContacts: Contact[] = this.contacts;
  private activeContact = new BehaviorSubject<Contact | null>(null);
  constructor() {}

  getContacts() {
    return this.contacts.asObservable();
  }

  getActiveContact() {
    return this.activeContact.asObservable();
  }

  addContact(contact: Contact) {
    this.contacts.next([...this.contacts.getValue(), contact]);
    // this.showFilteredContacts();
  }

  deleteContact(contact: Contact) {
    const filteredContacts = this.contacts
      .getValue()
      .filter((c) => c !== contact);
    this.contacts.next(filteredContacts);
    if (this.activeContact.getValue() === contact) {
      this.activeContact.next(null);
    }
    // this.showFilteredContacts();
  }

  setToActive(contact: Contact | null) {
    this.activeContact.next(contact);
  }

  // showFilteredContacts() {
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
  // }
}
