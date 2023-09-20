import { Component, OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  teacherLogin = new FormGroup({
    name:new FormControl('', Validators.required),
    pass:new FormControl('', Validators.required)

  })

  error= false

  get name(){
    return this.teacherLogin.get('name')
  }

  get pass(){
    return this.teacherLogin.get('pass')
  
  }
  
  constructor(private result:ApiserviceService, private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  r:any
  login()
  {
    this.result.getTeacher(this.teacherLogin.value).subscribe((result)=>{
      console.warn(result)
      this.r=result

      if (this.r["message"]=="valid")
      {
        localStorage.setItem("logged","true")
        this.router.navigate(['/viewalldata']);
        
      }
     
      else
      this.error=true
      
    })
  }

}
