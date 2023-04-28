import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit
{
    @Output()  public MyEvent = new EventEmitter();

    public str:any = "";
    
    public SendEvent(a:any)
    {
        this.str = this.MyEvent.emit(a);
    }
    constructor()
    {}

    ngOnInit(): void { }
}
