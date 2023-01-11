import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <img [src]="imgSrc" class="card-img-top" alt="..." />
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent {
  @Input() imgSrc: string = '';
}
