import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl, PatternValidator, MinLengthValidator} from '@angular/forms'


interface State {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

   public selectedValue ="";
   fname : string ="";
   lname : string = "";
   email : string = "";
   phone  : number = 0;
   address : string ="";
   city  : string =""; 
   zip : number = 0;
   state : string ="";
   comment : string = "";


    // Add characterictics which are required in form
    Customer = new FormGroup
    (
      {
      'fname' : new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])),
      'lname'  : new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])),
      'email'  : new FormControl(null,Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.]+@([a-zA-Z]{1,})+\.([a-zA-z]{2,})+$')])),
      'phone'  : new FormControl(null,Validators.compose([Validators.required,Validators.pattern('^([0-9]{10})+$')])),
      'address': new FormControl(null,Validators.required),
      'city'   : new FormControl(null,Validators.compose([Validators.required,Validators.minLength(4)])),
      'zip'   : new FormControl(null,Validators.compose([Validators.required,Validators.pattern('^([0-9]{6})+$')])),
      'state' : new FormControl(null,Validators.compose([Validators.required])),
      'comment' : new FormControl(null,Validators.compose([Validators.required,Validators.minLength(30)])),
      }
    )

 
    
    states: State[] = [
      {value: 'Maharashtra', viewValue: 'Maharashtra'},
      {value: 'Gujarat', viewValue: 'Gujarat'},
      {value: 'Uttar Pradesh', viewValue: 'Uttar Pradesh'},
    ];

    addPost(post : any)
    {
      this.fname = post.fname;
      this.lname = post.lname;
      this.phone = post.phone;
      this.email = post.email;
      this.address = post.address;
      this.zip = post.zip;
      this.city = post.city;
      this.state = post.state;
      this.comment = post.comment;

    }

 
}

