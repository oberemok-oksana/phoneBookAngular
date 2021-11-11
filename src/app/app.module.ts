import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { MyContactsComponent } from './components/my-contacts/my-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FindContactComponent } from './components/find-contact/find-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ModalComponent,
    MyContactsComponent,
    AddContactComponent,
    FindContactComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
