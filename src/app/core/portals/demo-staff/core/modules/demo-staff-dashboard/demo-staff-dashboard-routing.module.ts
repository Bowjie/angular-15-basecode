import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoStaffDashboardComponent } from './demo-staff-dashboard.component';

const routes: Routes = [{ path: '', component: DemoStaffDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoStaffDashboardRoutingModule { }
