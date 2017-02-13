/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Call2actionPnlComponent } from './call2action-pnl.component';

describe('Call2actionPnlComponent', () => {
  let component: Call2actionPnlComponent;
  let fixture: ComponentFixture<Call2actionPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Call2actionPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Call2actionPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
