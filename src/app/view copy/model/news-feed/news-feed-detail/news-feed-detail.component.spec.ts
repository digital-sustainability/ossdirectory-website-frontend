import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedDetailComponent } from './news-feed-detail.component';

describe('NewsFeedDetailComponent', () => {
  let component: NewsFeedDetailComponent;
  let fixture: ComponentFixture<NewsFeedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
