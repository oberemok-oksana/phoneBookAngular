import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AddContactResponse } from 'src/app/models/add-contact-response';
import { Contact } from 'src/app/models/contact';
import { ContactResponse } from 'src/app/models/contact-response';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public searchText: string = '';
  public searchType: string = 'find-by-name';

  public activeContactChange$ = new BehaviorSubject<Contact | null>(null);
  public contactAdded$ = new Subject();

  constructor(private http: HttpClient, private authService: AuthService) {}

  getContacts() {
    return this.http
      .get('https://mag-contacts-api.herokuapp.com/contacts', {
        headers: {
          Authorization: 'Bearer ' + this.authService.token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((response) => ContactResponse.fromJSON(response)));
  }

  addContact(contact: Contact) {
    return this.http
      .post(
        'https://mag-contacts-api.herokuapp.com/contacts/add',
        contact.toJSON(),
        {
          headers: {
            Authorization: 'Bearer ' + this.authService.token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        map((json) => AddContactResponse.fromJSON(json)),
        tap((response) => {
          if (response.isSuccessful()) {
            this.contactAdded$.next();
          }
        })
      );
  }

  filter(searchText: string, searchType: string) {
    this.searchText = searchText;
    this.searchType = searchType;
    // this.contacts.next(this.contacts.getValue());
  }

  resetFilters() {
    this.filter('', 'find-by-name');
  }

  setToActive(contact: Contact | null) {
    this.activeContactChange$.next(contact);
  }
}
