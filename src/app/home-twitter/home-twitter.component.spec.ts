import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwitterComponent } from './home-twitter.component';

describe('HomeTwitterComponent', () => {
  let component: HomeTwitterComponent;
  let fixture: ComponentFixture<HomeTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
