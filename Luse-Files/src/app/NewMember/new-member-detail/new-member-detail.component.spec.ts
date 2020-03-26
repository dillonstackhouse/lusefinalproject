import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberDetailComponent } from './new-member-detail.component';

describe('NewMemberDetailComponent', () => {
  let component: NewMemberDetailComponent;
  let fixture: ComponentFixture<NewMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
