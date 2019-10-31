import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductRelationCreateItemComponent } from './vendor-product-relation-create-item.component';

describe('VendorProductRelationCreateItemComponent', () => {
  let component: VendorProductRelationCreateItemComponent;
  let fixture: ComponentFixture<VendorProductRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProductRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProductRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
