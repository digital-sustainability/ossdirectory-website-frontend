import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryVendorRelationItemComponent } from './successstory-vendor-relation-item.component';

describe('SuccessstoryVendorRelationItemComponent', () => {
  let component: SuccessstoryVendorRelationItemComponent;
  let fixture: ComponentFixture<SuccessstoryVendorRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryVendorRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryVendorRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
