import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: number = 10, afterPoint: any, a: any = 0): any {
    return value.toFixed(afterPoint);
  }
}
