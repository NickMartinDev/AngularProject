import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  //styleUrls: ['./signup.component.css']
  styles: [
    `
      input.ng-invalid{
        background-color: #faa
      }
    `
  ]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSignupSubmit(form){
    console.log('form submitted', form)
    console.log(form.value)
    //form.setValue({username:'', password:'', email:''})
    form.reset()
  }
}
