/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdblockPnlComponent } from './adblock-pnl.component';

describe('AdblockPnlComponent', () => {
  let component: AdblockPnlComponent;
  let fixture: ComponentFixture<AdblockPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdblockPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdblockPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
