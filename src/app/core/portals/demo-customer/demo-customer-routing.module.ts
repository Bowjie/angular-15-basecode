import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { LoginComponent } from './core/components/login/login.component';
import { DemoCustomerComponent } from './demo-customer.component';
import { DemoCustomerGuard } from './demo-customer.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'demo-customer',
    component: DemoCustomerComponent,
    canActivate: [DemoCustomerGuard],
  },
  {
    path: 'login',
    component: ForgotPasswordComponent,
    canActivate: [DemoCustomerGuard],
  },
  {
    path: 'forgot',
    component: LoginComponent,
    canActivate: [DemoCustomerGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [DemoCustomerGuard],
  },
  {
    path: 'contact',
    loadChildren: () => import('./core/modules/contact/contact.module').then((m) => m.ContactModule),
    canActivate: [DemoCustomerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoCustomerRoutingModule {}
