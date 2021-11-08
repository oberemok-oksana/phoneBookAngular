import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [new User('Oksana', '12345', '12')];
  public currentUser?: User;

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  findUser(login: string, password: string) {
    this.currentUser = this.users.find((u) => {
      return u.login === login && u.password === password;
    });
  }

  logout() {
    this.currentUser = undefined;
  }
}
