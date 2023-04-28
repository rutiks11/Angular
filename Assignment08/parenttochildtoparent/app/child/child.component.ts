import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  // Parent to child communication
  @Input() public parentdata = "";

  // Child to parent communication
  @Output() public MyEvent = new EventEmitter();  //laser

  public str:any = "";

  public SendData()
  {
    this.str = this.MyEvent.emit("Hello from Child");
  }  

  constructor(){}

  ngOnInit(){}

}
