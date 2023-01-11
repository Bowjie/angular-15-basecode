import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoStaffDashboardRoutingModule } from './demo-staff-dashboard-routing.module';
import { DemoStaffDashboardComponent } from './demo-staff-dashboard.component';


@NgModule({
  declarations: [
    DemoStaffDashboardComponent
  ],
  imports: [
    CommonModule,
    DemoStaffDashboardRoutingModule
  ]
})
export class DemoStaffDashboardModule { }
