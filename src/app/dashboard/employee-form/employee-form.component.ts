import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService, Employee } from '../service/employee/employee.service';
import { FormData } from '../dashboard.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Input() selectedData: FormData;
  display: boolean;

  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.display = false;
   }

  ngOnChanges() {
    if (this.selectedData && this.selectedData.isSelectedRow) {
      this.display = true;
      this.employee = {
        firstName: this.selectedData.employee.firstName,
        lastName: this.selectedData.employee.lastName,
        country: this.selectedData.employee.country,
        nationality: this.selectedData.employee.nationality,
        company: this.selectedData.employee.company,
        designation: this.selectedData.employee.designation,
        workExperience: this.selectedData.employee.workExperience,
        CV: this.selectedData.employee.CV,
        dataSource: this.selectedData.employee.dataSource
      }
    }
  }

  insert() {
    this.employeeService.addEmployee(this.employee);
  }

  clear() {
    this.employee = new Employee();
  }

}
