import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  public Count:number = 0;
  public str:string = "";

  constructor(private _numberservice:NumberService, private _stringservice:StringService)
  {
  }
  ngOnInit() 
  {
    this.str = this._numberservice.ChkPrime(111)
    this.Count = this._stringservice.CountCapital("CHECk CaiPiTAL LeTTeRs")
  }
}
