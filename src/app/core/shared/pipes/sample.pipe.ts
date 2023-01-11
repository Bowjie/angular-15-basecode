import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample',
  standalone: true,
})
export class SamplePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
