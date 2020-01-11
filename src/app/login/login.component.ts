import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'lynetteRussel' && this.password === 'test') {
      this.loginService.setUsername(this.username);
      this.router.navigateByUrl('dashboard');
    }
  }

}
