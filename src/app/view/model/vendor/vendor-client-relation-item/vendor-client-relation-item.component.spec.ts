import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorClientRelationItemComponent } from './vendor-client-relation-item.component';

describe('VendorClientRelationItemComponent', () => {
  let component: VendorClientRelationItemComponent;
  let fixture: ComponentFixture<VendorClientRelationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorClientRelationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorClientRelationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
