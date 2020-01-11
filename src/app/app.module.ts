import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CamelCasePipe } from './helper/camel-case.pipe';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { EmployeeFormComponent } from './dashboard/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CamelCasePipe,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [ CamelCasePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
