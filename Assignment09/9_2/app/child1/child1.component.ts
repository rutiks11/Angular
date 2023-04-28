import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit
{
    public str:string ="";
    // Add instance of service in Constructor
    constructor(private _numberService:NumberService)
    {}

    //call the service method once
    ngOnInit()
    {
        this.str = this._numberService.ChkPrime(11);
    }
}
