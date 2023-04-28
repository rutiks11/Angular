import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  
  public addition:number = 0;
  public subtraction:number = 0;

  constructor(private _arithmaticService:ArithmaticService)
  {

  }

  ngOnInit()
  {
    this.addition = this._arithmaticService.Add();
    this.subtraction = this._arithmaticService.Sub();
  }

}
