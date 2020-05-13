import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeText'
})
export class ChangeTextPipe implements PipeTransform {

  transform(lenguage: string): string {
    if (lenguage === 'en') {
     return lenguage = 'Inglés';
    }else if (lenguage === 'es') {
      return lenguage = 'Español';
    }else if (lenguage === 'fr') {
      return lenguage = 'Francés';
    }
  }

}
