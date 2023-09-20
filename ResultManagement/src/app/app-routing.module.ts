import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { IndexComponent } from './index/index.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentLoginPageViewComponent } from './student-login-page-view/student-login-page-view.component';
import { ViewalldataComponent } from './viewalldata/viewalldata.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  {
    component:StudentLoginComponent,
    path:'studentlogin'
  },

  {
    component:IndexComponent,
    path:''
  },

  {
   component:TeacherLoginComponent,
   path:'teacherlogin'
  },

  {
    component:StudentLoginPageViewComponent,
    path:'studentLoginView'
  },

  {
    component:ViewalldataComponent,
    path:'viewalldata'
  },

  {
    component:AddStudentComponent,
    path:'addstudent'
  },

  {
    component:ViewresultComponent,
    path:'viewresult/:roll_no'
  },

  {
    component:EditStudentComponent,
    path:'edit/:roll_no'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
