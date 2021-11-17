import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Login } from '../../models/login';
import { User } from '../../models/user';
import { ModalService } from '../../services/modal/modal.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public login: Login = new Login('Oksana', '12345');

  public currentUser?: User;

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  signin(login: string, password: string) {
    if (this.login.login === '' || this.login.password === '') {
      this.modalService.showModalMessage('Please, fill out all the fields');
    } else {
      this.authService.login(login, password).subscribe((response) => {
        if (response.isErrored()) {
          this.modalService.showModalMessage(response.error!);
        }
      });
    }
  }
}
