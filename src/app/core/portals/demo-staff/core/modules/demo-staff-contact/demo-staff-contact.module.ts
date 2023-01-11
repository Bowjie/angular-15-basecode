import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoStaffContactRoutingModule } from './demo-staff-contact-routing.module';
import { DemoStaffContactComponent } from './demo-staff-contact.component';


@NgModule({
  declarations: [
    DemoStaffContactComponent
  ],
  imports: [
    CommonModule,
    DemoStaffContactRoutingModule
  ]
})
export class DemoStaffContactModule { }
