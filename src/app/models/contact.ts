export class Contact {
  constructor(
    public name: string,
    public type: string,
    public value: string,
    public id?: number
  ) {}

  static fromJSON(json: any) {
    return new Contact(json.name, json.type, json.value, json.id);
  }

  toJSON() {
    return {
      type: this.type,
      value: this.value,
      name: this.name,
    };
  }
}
