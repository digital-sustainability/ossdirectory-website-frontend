import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryClientRelationCreateItemComponent } from './successstory-client-relation-create-item.component';

describe('SuccessstoryClientRelationCreateItemComponent', () => {
  let component: SuccessstoryClientRelationCreateItemComponent;
  let fixture: ComponentFixture<SuccessstoryClientRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryClientRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryClientRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
