import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultGridComponent } from './default-grid.component';

describe('DefaultGridComponent', () => {
  let component: DefaultGridComponent;
  let fixture: ComponentFixture<DefaultGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
