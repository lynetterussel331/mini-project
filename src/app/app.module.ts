import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

import { CamelCasePipe } from './helper/camel-case.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { EmployeeFormComponent } from './dashboard/employee-form/employee-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    DashboardComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    LoginComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    PanelModule,
    SidebarModule,
    TableModule
  ],
  providers: [ CamelCasePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
