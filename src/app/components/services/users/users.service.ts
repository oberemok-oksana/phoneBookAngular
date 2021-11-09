import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users = new BehaviorSubject<User[]>([
    new User('Oksana', '12345', '12'),
  ]);
  private currentUser = new Subject<User>();

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.next([...this.users.getValue(), user]);
  }

  findUser(login: string, password: string) {
    const user = this.users.getValue().find((u) => {
      return u.login === login && u.password === password;
    });

    this.currentUser.next(user);

    return user;
  }

  logout() {
    this.currentUser.next(undefined);
  }
}
