import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnInit
{
  public CountUpper:number =0;
  constructor(private _stringService:StringService)
  {

  }

  ngOnInit(): void {
    this.CountUpper = this._stringService.CountCapital("MarVeLLous InFoSysTem")
  }

}
