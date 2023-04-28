import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  No1 : number;
  No2 : number;

  constructor() 
  { 
      this.No1 = 20;
      this.No2 = 10;
  }
   
  Add() : number
  { 
    let sum = 0;
    sum = this.No1 + this.No2;
    return sum;
  }

  Sub() : number
  { 
    let sub = 0;
    sub = this.No1 - this.No2;
    return sub;
  }
}

