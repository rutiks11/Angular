import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public Count:number =0;

  CountCapital(Inputstring:string): number
  {
    return this.Count = Inputstring.length - Inputstring.replace(/[A-Z]/g, '').length
  }
}
