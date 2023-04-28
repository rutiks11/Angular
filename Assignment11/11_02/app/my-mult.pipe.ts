import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number, param:number): number {
    let temp = 0;

    temp = param * value;
    
    return temp;
  }

}
