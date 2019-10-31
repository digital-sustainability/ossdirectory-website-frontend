import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductRelationItemComponent } from './client-product-relation-item.component';

describe('ClientProductRelationItemComponent', () => {
  let component: ClientProductRelationItemComponent;
  let fixture: ComponentFixture<ClientProductRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProductRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProductRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
