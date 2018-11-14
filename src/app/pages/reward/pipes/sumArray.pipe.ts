import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumArray'
})
export class SumArrayPipe implements PipeTransform {
  transform(arrNumber: number[], args?: any): number {
    if (!arrNumber) {
      return 0;
    }
    return arrNumber.reduce((a, b) => (a += b)) || 0;
  }
}
