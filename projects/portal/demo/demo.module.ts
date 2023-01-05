import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { ButtonComponent } from 'projects/framework/components';
import { ModalFormsComponent } from './modal-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent, ModalFormsComponent],
  imports: [CommonModule, DemoRoutingModule, ReactiveFormsModule, ButtonComponent],
})
export class DemoModule {}
