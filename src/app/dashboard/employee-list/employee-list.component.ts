import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../service/employee/employee.service';

export interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];
  columns: Column[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployeeList();

    this.columns = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName',  header: 'Last Name' },
      { field: 'country',   header: 'Country' },
      { field: 'nationality', header: 'Nationality' },
      { field: 'company',   header: 'Company' },
      { field: 'designation', header: 'Designation' },
      { field: 'workExperience', header: 'Work Experience' },
      { field: 'CV',        header: 'CV' },
      { field: 'dataSource', header: 'Data Source' }
    ];
  }

}
