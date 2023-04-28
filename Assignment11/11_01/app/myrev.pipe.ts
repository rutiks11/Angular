import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    let temp:string = "";

    for (let char of value) 
    {
      temp = char + temp
    }
     
    return temp;
  }
}
