import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamsComponent } from './manage-exams.component';

describe('ManageExamsComponent', () => {
  let component: ManageExamsComponent;
  let fixture: ComponentFixture<ManageExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
