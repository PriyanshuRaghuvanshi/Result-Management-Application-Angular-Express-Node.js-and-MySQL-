import { Component, OnInit} from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-student-login-page-view',
  templateUrl: './student-login-page-view.component.html',
  styleUrls: ['./student-login-page-view.component.css']
})
export class StudentLoginPageViewComponent implements OnInit {
  studentLoginView = new FormGroup({
    name:new FormControl('', Validators.required),
    pass:new FormControl('', Validators.required)

  })

  error= false

  get name(){
    return this.studentLoginView.get('name')
  }

  get pass(){
    return this.studentLoginView.get('pass')
  
  }
  
  constructor(private result:ApiserviceService, private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  r:any
  login()
  {
    this.result.getStudentView(this.studentLoginView.value).subscribe((result)=>{
      console.warn(result)
      this.r=result

      if (this.r["message"]=="valid")
      {
        localStorage.setItem("logged","true")
        this.router.navigate(['/studentlogin']);
        
      }
     
      else
      this.error=true
      
    })
  }

}
