import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSuccessstoryRelationItemComponent } from './client-successstory-relation-item.component';

describe('ClientSuccessstoryRelationItemComponent', () => {
  let component: ClientSuccessstoryRelationItemComponent;
  let fixture: ComponentFixture<ClientSuccessstoryRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSuccessstoryRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSuccessstoryRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
