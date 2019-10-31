import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedGridComponent } from './news-feed-grid.component';

describe('NewsFeedGridComponent', () => {
  let component: NewsFeedGridComponent;
  let fixture: ComponentFixture<NewsFeedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
