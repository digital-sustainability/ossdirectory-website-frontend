import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryVendorRelationCreateItemComponent } from './successstory-vendor-relation-create-item.component';

describe('SuccessstoryVendorRelationCreateItemComponent', () => {
  let component: SuccessstoryVendorRelationCreateItemComponent;
  let fixture: ComponentFixture<SuccessstoryVendorRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryVendorRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryVendorRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
