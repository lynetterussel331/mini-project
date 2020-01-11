import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CamelCasePipe } from './helper/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ CamelCasePipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
