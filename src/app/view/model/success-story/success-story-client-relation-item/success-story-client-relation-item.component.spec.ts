import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryClientRelationItemComponent } from './success-story-client-relation-item.component';

describe('SuccessStoryClientRelationItemComponent', () => {
  let component: SuccessStoryClientRelationItemComponent;
  let fixture: ComponentFixture<SuccessStoryClientRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryClientRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryClientRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
