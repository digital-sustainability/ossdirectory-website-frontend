import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGridComponent } from './job-grid.component';

describe('JobGridComponent', () => {
  let component: JobGridComponent;
  let fixture: ComponentFixture<JobGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
