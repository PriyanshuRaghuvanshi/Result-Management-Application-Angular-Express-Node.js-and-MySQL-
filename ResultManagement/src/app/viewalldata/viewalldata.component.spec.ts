import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldataComponent } from './viewalldata.component';

describe('ViewalldataComponent', () => {
  let component: ViewalldataComponent;
  let fixture: ComponentFixture<ViewalldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewalldataComponent]
    });
    fixture = TestBed.createComponent(ViewalldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
