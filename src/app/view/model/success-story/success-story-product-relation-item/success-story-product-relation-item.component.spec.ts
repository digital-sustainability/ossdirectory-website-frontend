import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryProductRelationItemComponent } from './success-story-product-relation-item.component';

describe('SuccessStoryProductRelationItemComponent', () => {
  let component: SuccessStoryProductRelationItemComponent;
  let fixture: ComponentFixture<SuccessStoryProductRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryProductRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryProductRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
