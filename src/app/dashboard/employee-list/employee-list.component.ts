import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService, Employee, Column } from '../service/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Output() isSelectedRow = new EventEmitter<{ isSelectedRow: boolean, employee: Employee }>();

  employeeList: Employee[];
  columns: Column[];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployeeList();
    this.columns = this.employeeService.getColumns();
  }

  selectRow(employee: Employee) {
    this.isSelectedRow.emit( { isSelectedRow: true, employee: employee } );
  }

}
