import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule, Routes } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  addStudent=new FormGroup({
    roll_no:new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
    name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    date_of_birth:new FormControl('',Validators.required),
    score:new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
})

error=false
  

  get roll_no(){return this.addStudent.get('roll_no')}
  get name(){return this.addStudent.get('name')}
  get date_of_birth(){return this.addStudent.get('data_of_birth')}
  get score(){return this.addStudent.get('score')}
  
  constructor(private router: ActivatedRoute, private result: ApiserviceService ,private routers: Router) { }

  r:any
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.routers.navigate(['/teacherlogin']);
    }
  }
  add()
  {
    
    console.warn(this.addStudent.value)
    this.result.getAddStudent(this.addStudent.value).subscribe((result)=>{
    console.log(result)
    this.r=result

    if (this.r["message"]=="Already exist")
    {
      this.error=true
      console.warn("Already exist")
    }
    else{
    this.routers.navigate(['/viewalldata']);
    console.warn("Added Successfully")
    }


})

  }
  logout()
  {
    localStorage.setItem("logged","false")
    this.routers.navigate(['/teacherlogin']);
  }
}
