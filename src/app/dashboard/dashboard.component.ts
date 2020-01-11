import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { CamelCasePipe } from '../helper/camel-case.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: String;

  constructor(
    private loginService: LoginService,
    private camelCasePipe: CamelCasePipe
  ) { }

  ngOnInit() {
    this.displayUsername();
  }

  displayUsername() {
    this.username = this.camelCasePipe.transform(this.loginService.getUsername());
  }

}
