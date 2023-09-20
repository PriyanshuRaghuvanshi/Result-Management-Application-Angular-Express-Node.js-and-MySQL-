import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  url="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url+"viewalldata");
  }

  getStudent(data:any){
    return this.http.post(this.url+"studentlogin",data);
  }
////////////////////////////////////////////////////////////
  getTeacher(data:any){
    return this.http.post(this.url+"/user/login", data);
  }

  getStudentView(data:any){
    return this.http.post(this.url+"studentLoginView",data);
  }

  delete(roll_no: any) {
    return this.http.get(this.url+"delete/"+roll_no);
  }

  getAddStudent(data:any){
    return this.http.post(this.url+"addstudent",data);
  }

  getresult(roll_no:any){
    return this.http.get(this.url+"viewresult/"+roll_no);
  }

  getedit(data:any){
    return this.http.post(this.url+"edit",data);
  }
 
}
