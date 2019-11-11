import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuccessstoryRelationItemComponent } from './product-successstory-relation-item.component';

describe('ProductSuccessstoryRelationItemComponent', () => {
  let component: ProductSuccessstoryRelationItemComponent;
  let fixture: ComponentFixture<ProductSuccessstoryRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSuccessstoryRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSuccessstoryRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
