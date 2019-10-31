import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCommunityRelationItemComponent } from './vendor-community-relation-item.component';

describe('VendorCommunityRelationItemComponent', () => {
  let component: VendorCommunityRelationItemComponent;
  let fixture: ComponentFixture<VendorCommunityRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCommunityRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCommunityRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
