import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No1:number) : any
  { 
    let iCnt = 2;
    for(iCnt ; iCnt <= No1; iCnt++)
    {
      if(No1 % iCnt == 0)
      {
        return "Given Number is not Prime"
      }
      else
      {
        return "Given Number is Prime"
      }
    }
  }
}
