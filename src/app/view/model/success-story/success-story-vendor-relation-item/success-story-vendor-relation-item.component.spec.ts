import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryVendorRelationItemComponent } from './success-story-vendor-relation-item.component';

describe('SuccessStoryVendorRelationItemComponent', () => {
  let component: SuccessStoryVendorRelationItemComponent;
  let fixture: ComponentFixture<SuccessStoryVendorRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryVendorRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryVendorRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
