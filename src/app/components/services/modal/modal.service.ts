import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModal = new BehaviorSubject<boolean>(false);
  private message = new BehaviorSubject<string | null>(null);

  getShowModal() {
    return this.showModal.asObservable();
  }

  getMessage() {
    return this.message.asObservable();
  }

  showModalMessage(message: string) {
    this.showModal.next(true);
    this.message.next(message);
  }

  closeModal() {
    this.showModal.next(false);
  }
}
