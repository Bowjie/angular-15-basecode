import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoStaffRoutingModule } from './demo-staff-routing.module';
import { DemoStaffComponent } from './demo-staff.component';
import { DemoStaffLoginComponent } from './core/components/demo-staff-login/demo-staff-login.component';
import { DemoStaffForgotPasswordComponent } from './core/components/demo-staff-forgot-password/demo-staff-forgot-password.component';


@NgModule({
  declarations: [
    DemoStaffComponent,
    DemoStaffLoginComponent,
    DemoStaffForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    DemoStaffRoutingModule
  ]
})
export class DemoStaffModule { }
