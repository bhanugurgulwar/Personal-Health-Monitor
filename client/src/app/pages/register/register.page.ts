import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!:FormGroup;



  constructor(private fb:FormBuilder,
    private authservice:AuthserviceService
    ) { }



  ngOnInit() {
    this.formInit()
  }

  formInit(){
    this.registerForm= this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',(Validators.required,Validators.email)],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }

  registerSubmit(){
    console.log(this.registerForm.value)
    let regsiterData = this.registerForm.value
    this.authservice.registerService("auth/register",regsiterData).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

   

}
