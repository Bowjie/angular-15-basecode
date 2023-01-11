import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoStaffForgotPasswordComponent } from './core/components/demo-staff-forgot-password/demo-staff-forgot-password.component';
import { DemoStaffLoginComponent } from './core/components/demo-staff-login/demo-staff-login.component';
import { DemoStaffComponent } from './demo-staff.component';
import { DemoStaffGuard } from './demo-staff.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'demo-staff',
    component: DemoStaffComponent,
    canActivate: [DemoStaffGuard],
  },
  {
    path: 'login',
    component: DemoStaffLoginComponent,
    canActivate: [DemoStaffGuard],
  },
  {
    path: 'forgot',
    component: DemoStaffForgotPasswordComponent,
    canActivate: [DemoStaffGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/modules/demo-staff-dashboard/demo-staff-dashboard.module').then((m) => m.DemoStaffDashboardModule),
    canActivate: [DemoStaffGuard],
  },
  {
    path: 'contact',
    loadChildren: () => import('./core/modules/demo-staff-contact/demo-staff-contact.module').then((m) => m.DemoStaffContactModule),
    canActivate: [DemoStaffGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoStaffRoutingModule {}
