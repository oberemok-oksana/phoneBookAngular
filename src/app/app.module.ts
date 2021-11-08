import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
