import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGridComponent } from './client-grid.component';

describe('ClientGridComponent', () => {
  let component: ClientGridComponent;
  let fixture: ComponentFixture<ClientGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
