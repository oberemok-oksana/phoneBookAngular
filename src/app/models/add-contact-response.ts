export class AddContactResponse {
  constructor(public status: string) {}

  static fromJSON(json: any) {
    return new AddContactResponse(json.status);
  }

  isSuccessful() {
    return this.status === 'ok';
  }
}
