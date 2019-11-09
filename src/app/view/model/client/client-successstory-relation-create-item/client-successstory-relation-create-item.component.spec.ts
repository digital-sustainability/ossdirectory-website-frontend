import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSuccessstoryRelationCreateItemComponent } from './client-successstory-relation-create-item.component';

describe('ClientSuccessstoryRelationCreateItemComponent', () => {
  let component: ClientSuccessstoryRelationCreateItemComponent;
  let fixture: ComponentFixture<ClientSuccessstoryRelationCreateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSuccessstoryRelationCreateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSuccessstoryRelationCreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
