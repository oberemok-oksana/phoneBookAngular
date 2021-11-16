import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public searchText: string = '';
  public searchType: string = 'find-by-name';
  private contacts = new BehaviorSubject<Contact[]>([
    new Contact('Boba', 'phone', '06446486'),
  ]);
  private activeContact = new BehaviorSubject<Contact | null>(null);
  constructor() {}

  getContacts() {
    return this.contacts.asObservable().pipe(
      map((contacts) => {
        if (this.searchType === 'find-by-name') {
          return contacts.filter((c) =>
            c.name
              .toLocaleLowerCase()
              .startsWith(this.searchText.toLocaleLowerCase())
          );
        } else {
          return contacts.filter((c) =>
            c.value
              .toLocaleLowerCase()
              .startsWith(this.searchText.toLocaleLowerCase())
          );
        }
      })
    );
  }

  getActiveContact() {
    return this.activeContact.asObservable();
  }

  addContact(contact: Contact) {
    this.contacts.next([...this.contacts.getValue(), contact]);
  }

  filter(searchText: string, searchType: string) {
    this.searchText = searchText;
    this.searchType = searchType;
    this.contacts.next(this.contacts.getValue());
  }

  resetFilters() {
    this.filter('', 'find-by-name');
  }

  deleteContact(contact: Contact) {
    const filteredContacts = this.contacts
      .getValue()
      .filter((c) => c !== contact);
    this.contacts.next(filteredContacts);
    if (this.activeContact.getValue() === contact) {
      this.activeContact.next(null);
    }
  }

  setToActive(contact: Contact | null) {
    this.activeContact.next(contact);
  }
}
