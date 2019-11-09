import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstoryClientRelationItemComponent } from './successstory-client-relation-item.component';

describe('SuccessstoryClientRelationItemComponent', () => {
  let component: SuccessstoryClientRelationItemComponent;
  let fixture: ComponentFixture<SuccessstoryClientRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstoryClientRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstoryClientRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
