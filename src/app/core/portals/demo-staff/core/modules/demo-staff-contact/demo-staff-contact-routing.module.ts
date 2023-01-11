import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoStaffContactComponent } from './demo-staff-contact.component';

const routes: Routes = [{ path: '', component: DemoStaffContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoStaffContactRoutingModule { }
