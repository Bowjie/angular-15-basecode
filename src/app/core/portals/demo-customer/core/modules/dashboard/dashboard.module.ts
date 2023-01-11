import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonComponent } from 'src/app/core/framework/components';
import { ModalFormsComponent } from './components/modal-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, ModalFormsComponent],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule, ButtonComponent],
})
export class DashboardModule {}
