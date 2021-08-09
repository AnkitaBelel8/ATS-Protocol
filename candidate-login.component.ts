import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {

  CandidateLoginForm: FormGroup;
  hide: boolean = true;

  constructor() {
    this.CandidateLoginForm = new FormGroup(
    {
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    }
  ); 
}

  ngOnInit(): void {
   
  }

  onLogin(){
    
  }

}
