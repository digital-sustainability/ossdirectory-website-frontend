import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssGridComponent } from './rss-grid.component';

describe('RssGridComponent', () => {
  let component: RssGridComponent;
  let fixture: ComponentFixture<RssGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
