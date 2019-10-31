import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssDetailComponent } from './rss-detail.component';

describe('RssDetailComponent', () => {
  let component: RssDetailComponent;
  let fixture: ComponentFixture<RssDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
