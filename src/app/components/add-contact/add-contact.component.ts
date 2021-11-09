import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../services/contacts/contacts.service';
import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  public contact: Contact = new Contact('', 'phone', '');
  public types: string[] = ['phone', 'email'];

  constructor(
    private modalService: ModalService,
    private contactsService: ContactsService
  ) {}

  addContact(name: string, type: string, value: string) {
    if (
      this.contact.name === '' ||
      this.contact.type === '' ||
      this.contact.value === ''
    ) {
      this.modalService.showModalMessage('Please, fill out all the fields');
    } else {
      this.contactsService.addContact(new Contact(name, type, value));
      this.contact = new Contact('', 'phone', '');
    }
  }
}
