import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryGridComponent } from './success-story-grid.component';

describe('SuccessStoryGridComponent', () => {
  let component: SuccessStoryGridComponent;
  let fixture: ComponentFixture<SuccessStoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
