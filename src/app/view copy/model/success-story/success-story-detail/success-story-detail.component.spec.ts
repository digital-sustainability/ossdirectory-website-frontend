import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryDetailComponent } from './success-story-detail.component';

describe('SuccessStoryDetailComponent', () => {
  let component: SuccessStoryDetailComponent;
  let fixture: ComponentFixture<SuccessStoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
