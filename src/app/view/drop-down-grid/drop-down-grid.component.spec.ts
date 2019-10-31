import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownGridComponent } from './drop-down-grid.component';

describe('DropDownGridComponent', () => {
  let component: DropDownGridComponent;
  let fixture: ComponentFixture<DropDownGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
