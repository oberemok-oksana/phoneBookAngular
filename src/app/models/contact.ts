export class Contact {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public value: string
  ) {}

  static fromJSON(json: any) {
    return new Contact(json.id, json.name, json.type, json.value);
  }
}
