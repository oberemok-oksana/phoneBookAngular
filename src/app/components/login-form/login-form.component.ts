import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { User } from '../../models/user';
import { ModalService } from '../services/modal/modal.service';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public login: Login = new Login('', '');

  public currentUser?: User;

  constructor(
    private usersService: UsersService,
    private modalService: ModalService
  ) {}

  signin(login: string, password: string) {
    if (this.login.login === '' || this.login.password === '') {
      this.modalService.showModalMessage('Please, fill out all the fields');
    } else {
      this.currentUser = this.usersService.findUser(login, password);
      if (!this.currentUser) {
        this.modalService.showModalMessage('Wrong login or password');
      }
    }
  }
}
