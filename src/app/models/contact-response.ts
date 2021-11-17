import { Contact } from './contact';

export class ContactResponse {
  constructor(public contacts: Contact[], public status: string) {}

  static fromJSON(json: any) {
    let contacts: Contact[] = [];
    if (json.contacts) {
      contacts = (json.contacts as any[]).map((c) => Contact.fromJSON(c));
    }

    return new ContactResponse(contacts, json.status);
  }
}
