import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryProductRelationCreateItemComponent } from './successstory-product-relation-create-item.component';

describe('SuccessstoryProductRelationCreateItemComponent', () => {
  let component: SuccessstoryProductRelationCreateItemComponent;
  let fixture: ComponentFixture<SuccessstoryProductRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryProductRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryProductRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
