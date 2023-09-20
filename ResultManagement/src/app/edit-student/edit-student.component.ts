import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  editResult = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    date_of_birth: new FormControl('', Validators.required),
    score: new FormControl('',  [Validators.required,Validators.pattern('[0-9]*')]),

  })
  constructor(private router: ActivatedRoute, private result: ApiserviceService ,private routers: Router) { }

  r: any
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.routers.navigate(['/teacherlogin']);
    }
    console.warn(this.router.snapshot.params['roll_no'])
    this.result.getresult(this.router.snapshot.params['roll_no']).
      subscribe((result) => {

        this.r = result
        console.warn(this.r.data)
        this.editResult = new FormGroup({
          roll_no: new FormControl(this.r.data[0].roll_no),
          name: new FormControl(this.r.data[0].name),
          date_of_birth: new FormControl(this.r.data[0].date_of_birth),
          score: new FormControl(this.r.data[0].score)



        })

      }
      )
  }
  
  edit() {
    this.result.getedit(this.editResult.value).subscribe((result)=>{
      console.log(result)
      this.routers.navigate(['/viewalldata']);


  })
  }
  logout()
  {
    localStorage.setItem("logged","false")
    this.routers.navigate(['/teacherlogin']);
  }
}
