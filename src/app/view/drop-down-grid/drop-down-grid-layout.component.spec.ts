import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownGridLayoutComponent } from './drop-down-grid-layout.component';

describe('DropDownGridLayoutComponent', () => {
  let component: DropDownGridLayoutComponent;
  let fixture: ComponentFixture<DropDownGridLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownGridLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
