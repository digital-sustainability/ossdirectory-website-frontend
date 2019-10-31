import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSuccessstoryRelationItemComponent } from './vendor-successstory-relation-item.component';

describe('VendorSuccessstoryRelationItemComponent', () => {
  let component: VendorSuccessstoryRelationItemComponent;
  let fixture: ComponentFixture<VendorSuccessstoryRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSuccessstoryRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSuccessstoryRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
