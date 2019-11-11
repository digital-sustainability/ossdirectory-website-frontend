import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVendorRelationCreateItemComponent } from './product-vendor-relation-create-item.component';

describe('ProductVendorRelationCreateItemComponent', () => {
  let component: ProductVendorRelationCreateItemComponent;
  let fixture: ComponentFixture<ProductVendorRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVendorRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVendorRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
