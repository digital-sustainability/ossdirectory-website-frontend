import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGridComponent } from './vendor-grid.component';

describe('VendorGridComponent', () => {
  let component: VendorGridComponent;
  let fixture: ComponentFixture<VendorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
