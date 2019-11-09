import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuccessstoryRelationCreateItemComponent } from './product-successstory-relation-create-item.component';

describe('ProductSuccessstoryRelationCreateItemComponent', () => {
  let component: ProductSuccessstoryRelationCreateItemComponent;
  let fixture: ComponentFixture<ProductSuccessstoryRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSuccessstoryRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSuccessstoryRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
