import { Injectable } from '@angular/core';

export class Employee {
  firstName: string;
  lastName: string;
  country: string;
  nationality: string;
  company: string;
  designation: string;
  workExperience: number;
  CV: string;
  dataSource: string;
}

export interface Column {
  field: string;
  header: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList: Employee[];

  constructor() { }

  getColumns(): Column[] {
    return [
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

  addEmployee(employee: Employee) {
    this.employeeList.push(employee);
  }

  getEmployeeList(): Employee[] {
    return this.employeeList = [
      { 
        firstName: 'Brenden',
        lastName: 'Wagner', 
        country: 'United States of America, California', 
        nationality: 'American', 
        company: 'Facebook', 
        designation: 'Software Engineer', 
        workExperience: 8, 
        CV: '', 
        dataSource: 'Facebook' 
      },
      { 
        firstName: 'Cara',
        lastName: 'Stevens', 
        country: 'United States of America, New York', 
        nationality: 'American', 
        company: 'Walmart', 
        designation: 'Sales Assistant', 
        workExperience: 5, 
        CV: '', 
        dataSource: 'Google' 
      },
      { 
        firstName: 'Cedric',
        lastName: 'Kelly', 
        country: 'Scotland, Glaslow City', 
        nationality: 'Scottish', 
        company: 'Data Tech', 
        designation: 'Senior Javascript Developer', 
        workExperience: 7, 
        CV: '', 
        dataSource: 'Monster Gulf' 
      },
      { 
        firstName: 'Doris',
        lastName: 'Wilder', 
        country: 'Australia, Queensland', 
        nationality: 'Australian', 
        company: 'Telstra', 
        designation: 'Support Engineer', 
        workExperience: 3, 
        CV: '', 
        dataSource: 'JobsDB' 
      },
      { 
        firstName: 'Jenny',
        lastName: 'Chang', 
        country: 'Singapore, Singapore', 
        nationality: 'Chinese' , 
        company: 'Singapore Airlines', 
        designation: 'Regional Director', 
        workExperience: 15, 
        CV: '', 
        dataSource: 'Twitter' 
      },
      { 
        firstName: 'Lynette',
        lastName: 'Chua', 
        country: 'Philippines, Tarlac', 
        nationality: 'Filipino' , 
        company: 'Titus Global Tech', 
        designation: 'Software Engineer', 
        workExperience: 4, 
        CV: '', 
        dataSource: 'Google' 
      }
    ];
  }

}
