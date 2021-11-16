import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-find-contact',
  templateUrl: './find-contact.component.html',
  styleUrls: ['./find-contact.component.css'],
})
export class FindContactComponent {
  public searchText: string = '';
  public searchType: 'find-by-name' | 'find-by-value' = 'find-by-name';

  constructor(private contactsService: ContactsService) {}

  resetFindContact() {
    this.contactsService.setToActive(null);
    this.contactsService.resetFilters();
  }

  showFilteredContacts() {
    this.contactsService.filter(this.searchText, this.searchType);
  }
}
