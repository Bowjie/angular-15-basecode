import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoCustomerRoutingModule } from './demo-customer-routing.module';
import { DemoCustomerComponent } from './demo-customer.component';
import { LoginComponent } from './core/components/login/login.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [DemoCustomerComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, DemoCustomerRoutingModule],
})
export class DemoCustomerModule {}
