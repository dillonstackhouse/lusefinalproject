import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListDetailComponent } from './server-list-detail.component';

describe('ServerListDetailComponent', () => {
  let component: ServerListDetailComponent;
  let fixture: ComponentFixture<ServerListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
