import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentLoginPageViewComponent } from './student-login-page-view/student-login-page-view.component';
import { ViewalldataComponent } from './viewalldata/viewalldata.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    IndexComponent,
    TeacherLoginComponent,
    StudentLoginPageViewComponent,
    ViewalldataComponent,
    AddStudentComponent,
    ViewresultComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
