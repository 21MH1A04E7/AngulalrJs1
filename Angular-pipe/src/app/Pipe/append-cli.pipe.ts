import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCli'
})
export class AppendCliPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.toString().substring(0,20);
  }
}
