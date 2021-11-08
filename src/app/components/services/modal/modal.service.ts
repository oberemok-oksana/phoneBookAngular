import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public showModal: boolean = false;
  public message?: string;

  showModalMessage(message: string) {
    this.message = message;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
