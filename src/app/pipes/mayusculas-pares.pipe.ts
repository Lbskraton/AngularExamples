import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculasPares'
})
export class MayusculasParesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let letras=value.split('')

    return letras.map((l,index)=>index%2!=0?l.toUpperCase():l.toLowerCase()).join('');
  }

}
