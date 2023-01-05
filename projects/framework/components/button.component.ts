import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" class="btn" [ngClass]="size + ' ' + btnStyle">
      <i [ngClass]="iconClass"></i>
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() size: 'btn-sm' | 'btn-lg' | '' = '';
  @Input() btnStyle: 'btn-primary' | 'btn-dark' | '' = '';
  @Input() iconClass: string = '';
}
