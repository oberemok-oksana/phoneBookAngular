import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ModalService } from '../../services/modal/modal.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  public user: User = new User('', '', '');
  public showModal: boolean = false;
  public message?: string;

  constructor(
    private usersService: UsersService,
    private modalService: ModalService
  ) {}

  signup() {
    if (
      this.user.login === '' ||
      this.user.password === '' ||
      this.user.birthdate === ''
    ) {
      this.modalService.showModalMessage('Please, fill out all the fields');
    } else {
      this.usersService.addUser(this.user);
      this.user = new User('', '', '');
    }
  }
}
