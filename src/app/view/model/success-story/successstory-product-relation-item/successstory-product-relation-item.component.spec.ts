import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryProductRelationItemComponent } from './successstory-product-relation-item.component';

describe('SuccessstoryProductRelationItemComponent', () => {
  let component: SuccessstoryProductRelationItemComponent;
  let fixture: ComponentFixture<SuccessstoryProductRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryProductRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryProductRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
