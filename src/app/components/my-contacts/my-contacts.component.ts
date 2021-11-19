import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactResponse } from 'src/app/models/contact-response';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css'],
})
export class MyContactsComponent {
  public contacts: Contact[] = [];
  public activeContact: Contact | null = null;

  constructor(
    private contactsService: ContactsService,
    private modalService: ModalService
  ) {
    this.contactsService.getContacts().subscribe(this.contactsResponseHandler);

    this.contactsService.activeContactChange$.subscribe((contact) => {
      this.activeContact = contact;
    });

    this.contactsService.contactAdded$.subscribe(() => {
      this.contactsService
        .getContacts()
        .subscribe(this.contactsResponseHandler);
    });

    this.contactsService.filtersChanged$.subscribe((filters) => {
      if (filters.isEmpty()) {
        this.contactsService
          .getContacts()
          .subscribe(this.contactsResponseHandler);
      } else {
        this.contactsService
          .findContacts(filters)
          .subscribe(this.contactsResponseHandler);
      }
    });
  }

  contactsResponseHandler = (response: ContactResponse) => {
    if (response.status === 'ok') {
      this.contacts = response.contacts;
    } else {
      this.modalService.showModalMessage('Something went wrong');
    }
  };

  setActive(contact: Contact) {
    this.contactsService.setActive(contact);
  }
}
