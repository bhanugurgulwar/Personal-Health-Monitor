import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm! : FormGroup;

  constructor(private fb:FormBuilder,
    private authservice:AuthserviceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

  loginSubmit(){
    console.log(this.loginForm.value)
    this.authservice.loginService("/auth/login",this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
