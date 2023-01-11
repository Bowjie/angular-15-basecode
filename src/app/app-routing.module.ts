import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo-customer',
  },
  {
    path: 'demo-customer',
    loadChildren: () => import('./core/portals/demo-customer/demo-customer.module').then((m) => m.DemoCustomerModule),
  },
  {
    path: 'demo-staff',
    loadChildren: () => import('./core/portals/demo-staff/demo-staff.module').then((m) => m.DemoStaffModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
