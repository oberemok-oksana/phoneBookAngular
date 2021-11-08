import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [new User('Oksana', '12345', '12')];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  findUser(login: string, password: string) {
    return this.users.find((u) => {
      return u.login === login && u.password === password;
    });
  }
}
