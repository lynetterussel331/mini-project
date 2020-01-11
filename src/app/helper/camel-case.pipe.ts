import { Pipe, PipeTransform } from '@angular/core';
import { type } from 'os';
import { stringify } from 'querystring';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value): any {
    if (typeof(value) === 'string') {
      const characters = value.split("");
      value = '';

      for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        if (i == 0 || char == char.toUpperCase()) {
          value += " " + char.toUpperCase();
        } else {
          value += char;
        }
      }
    }

    return value;
  }

}
