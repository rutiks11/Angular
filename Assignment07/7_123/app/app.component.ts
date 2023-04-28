import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Assignment7';
  public str = "Marvellous Infosystem";
  public UPPER = "UPPER";
  public LOWER = "LOWER";
  constructor()
  {}

  fun()
  {return "Marvellous Infosystem";}

  fun1()
  {console.log("Educationg for Better Tomorrow");
    this.str = "Educationg for Better Tomorrow";}

  fun2()
  {this.UPPER = "MARVELLOS INFOSYSTEM";}

  fun3()
  {this.LOWER = "marvellous infosystem";}
}
