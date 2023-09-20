import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-viewalldata',
  templateUrl: './viewalldata.component.html',
  styleUrls: ['./viewalldata.component.css']
})
export class ViewalldataComponent implements OnInit {

constructor(private result: ApiserviceService, private router:Router){}
r:any
collection:any=[];
ngOnInit(): void {
  if(localStorage.getItem("logged")=="false"){
    this.router.navigate(['/teacherlogin']);
  }
  this.result.getList().subscribe((result) => {
    console.warn(result)
    this.r = result
    this.collection = this.r["data"]

  })
}

delete(roll_no: any) {
this.result.delete(roll_no).subscribe((result)  =>{

window.location.reload()

})
}

logout()
{
  localStorage.setItem("logged","false")
  this.router.navigate(['/teacherlogin']);
}
}
