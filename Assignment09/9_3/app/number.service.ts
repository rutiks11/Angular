import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(iValue:number) : any
  {
    let iCnt = 2;
    for(iCnt; iCnt<=iValue; iCnt++)
    {
      if(iValue % iCnt == 0)
      {
        return "Given Number is not Prime";
      }
      else
      {
        return "Given Number is Prime";
      }
    }
  }
}
