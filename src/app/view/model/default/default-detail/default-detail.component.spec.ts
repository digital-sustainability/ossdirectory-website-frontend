import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDetailComponent } from './default-detail.component';

describe('DefaultDetailComponent', () => {
  let component: DefaultDetailComponent;
  let fixture: ComponentFixture<DefaultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
