import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe',
})
export class TextPipePipe implements PipeTransform {
  transform(value: string,length:number): string {
    if (!value) return 'Please provide a value';
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ').slice(0,length);
  }
}
