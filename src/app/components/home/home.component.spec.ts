import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component } from '@angular/core';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({selector: 'app-authorised-top-nav', template: ''})
class AuthorisedTopNavComponent {}

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthorisedTopNavComponent,
        HomeComponent
      ]
    })
  })
);

