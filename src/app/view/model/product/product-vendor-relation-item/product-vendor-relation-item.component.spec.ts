import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVendorRelationItemComponent } from './product-vendor-relation-item.component';

describe('ProductVendorRelationItemComponent', () => {
  let component: ProductVendorRelationItemComponent;
  let fixture: ComponentFixture<ProductVendorRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVendorRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVendorRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
