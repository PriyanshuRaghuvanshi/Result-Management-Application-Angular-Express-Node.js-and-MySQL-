import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginPageViewComponent } from './student-login-page-view.component';

describe('StudentLoginPageViewComponent', () => {
  let component: StudentLoginPageViewComponent;
  let fixture: ComponentFixture<StudentLoginPageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLoginPageViewComponent]
    });
    fixture = TestBed.createComponent(StudentLoginPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
