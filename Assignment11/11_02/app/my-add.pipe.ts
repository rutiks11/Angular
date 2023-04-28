import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: number): number{
    
    let temp =  0 ;

    temp = value + param;

    return temp;
  }

}
