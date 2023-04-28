import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  constructor() { }

  public Cnt:number = 0;

  CountCapital(Inputstr:string) : number
  {
    return this.Cnt = Inputstr.length - Inputstr.replace(/[A-Z]/g, '').length 
  }
}
