import { ApageComponent } from './../apage/apage.component';
import { Component } from '@angular/core';


import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {



  result:any;
  path:any;
  isLogged:boolean = false;
  constructor(private router:Router) { }

  myLogin = new FormGroup({
    email:new FormControl(" ",[Validators.required,Validators.email]),
    password: new FormControl(" ",[Validators.required,Validators.maxLength(15)])
  });
  ngOnInit(): void {
  }

  get Email(){
    return this.myLogin.get('email');
  }

  get Password(){
    return this.myLogin.get('password');
  }
  onLogin(){
      if((this.Email?.value=='Pooja12@gmail.com') && (this.Password?.value=='00000')){
        localStorage.setItem('token',"gjkkkkkvfddddjkkkk");
        this.myLogin.reset();
        this.router.navigate(['apage'])
      }
  }
}



