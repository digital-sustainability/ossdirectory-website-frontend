import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductRelationItemComponent } from './vendor-product-relation-item.component';

describe('VendorProductRelationItemComponent', () => {
  let component: VendorProductRelationItemComponent;
  let fixture: ComponentFixture<VendorProductRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProductRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProductRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
