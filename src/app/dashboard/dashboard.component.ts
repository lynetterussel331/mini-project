import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { CamelCasePipe } from '../helper/camel-case.pipe';
import { Employee } from './service/employee/employee.service';

export interface FormData {
  isSelectedRow: boolean;
  employee: Employee;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formData: FormData;
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

  setFormData(event) {
    this.formData = { isSelectedRow: event.isSelectedRow, employee: event.employee };
  }

}
