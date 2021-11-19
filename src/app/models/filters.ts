export class Filters {
  constructor(
    public searchText: string = '',
    public searchType: string = 'find-by-name'
  ) {}

  toRequestFormat() {
    if (this.searchType === 'find-by-name') {
      return { name: this.searchText };
    } else {
      return { value: this.searchText };
    }
  }

  isEmpty() {
    return this.searchText === '';
  }
}
