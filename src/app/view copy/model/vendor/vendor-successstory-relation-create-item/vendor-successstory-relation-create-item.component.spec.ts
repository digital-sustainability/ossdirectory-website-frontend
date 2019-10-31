import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSuccessstoryRelationCreateItemComponent } from './vendor-successstory-relation-create-item.component';

describe('VendorSuccessstoryRelationCreateItemComponent', () => {
  let component: VendorSuccessstoryRelationCreateItemComponent;
  let fixture: ComponentFixture<VendorSuccessstoryRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSuccessstoryRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSuccessstoryRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
