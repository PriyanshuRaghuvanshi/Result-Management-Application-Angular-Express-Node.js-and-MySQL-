import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule, Routes } from '@angular/router';
import { R3PartialDeclaration } from '@angular/compiler';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit{

  viewResult = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl(''),
    date_of_birth: new FormControl(''),
    score: new FormControl('')

  })


  get roll_no() { return this.viewResult.get('roll_no') }
  get name() { return this.viewResult.get('name') }
  get date_of_birth() { return this.viewResult.get('date_of_birth') }
  get score() { return this.viewResult.get('score') }

  constructor(private router: ActivatedRoute, private result:ApiserviceService ,private route:Router) { }

  r: any
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.route.navigate(['/studentLoginView']);
    }
    


    console.warn(this.router.snapshot.params['roll_no'])
    this.result.getresult(this.router.snapshot.params['roll_no']).
      subscribe((result) => {

        this.r = result
        console.warn(this.r.data)
        this.viewResult = new FormGroup({
          roll_no: new FormControl(this.r.data[0].roll_no),
          name: new FormControl(this.r.data[0].name),
          date_of_birth: new FormControl(this.r.data[0].date_of_birth),
          score: new FormControl(this.r.data[0].score)

          
        })
        localStorage.setItem("logged","false")

      }


      )
  }
}
