import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string;

  constructor() { }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }
}
