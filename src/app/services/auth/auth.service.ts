import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginResponse } from 'src/app/models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login$ = new Subject();
  public logout$ = new Subject();
  public token: string | null = null;

  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http
      .post(
        'https://mag-contacts-api.herokuapp.com/login',
        {
          login: login,
          password: password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        map((json: any) => LoginResponse.fromJSON(json)),
        tap((response) => {
          if (response.isSucceccful()) {
            this.token = response.token;
            this.login$.next();
          }
        })
      );
  }

  logout() {
    this.token = null;
    this.logout$.next();
  }
}
