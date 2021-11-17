import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/models/contact';
import { ContactResponse } from 'src/app/models/contact-response';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public searchText: string = '';
  public searchType: string = 'find-by-name';

  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPa3NhbmEiLCJpYXQiOjE2MzcwODAwMzgsImV4cCI6MTYzNzA4MzYzOH0.ZJxqgrrgq0VSm2NZLCAwBR38P18TuSAlO2-nNdBUI3k';
  private activeContact = new BehaviorSubject<Contact | null>(null);
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http
      .get<ContactResponse>('https://mag-contacts-api.herokuapp.com/contacts', {
        headers: {
          Authorization: 'Bearer ' + this.token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((response) => ContactResponse.fromJSON(response)));
  }

  getActiveContact() {
    return this.activeContact.asObservable();
  }

  addContact(contact: Contact) {
    // this.contacts.next([...this.contacts.getValue(), contact]);
  }

  filter(searchText: string, searchType: string) {
    this.searchText = searchText;
    this.searchType = searchType;
    // this.contacts.next(this.contacts.getValue());
  }

  resetFilters() {
    this.filter('', 'find-by-name');
  }

  deleteContact(contact: Contact) {
    // const filteredContacts = this.contacts
    // .getValue()
    // .filter((c) => c !== contact);
    // this.contacts.next(filteredContacts);
    if (this.activeContact.getValue() === contact) {
      this.activeContact.next(null);
    }
  }

  setToActive(contact: Contact | null) {
    this.activeContact.next(contact);
  }
}
