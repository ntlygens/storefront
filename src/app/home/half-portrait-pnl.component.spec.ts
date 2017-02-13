/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HalfPortraitPnlComponent } from './half-portrait-pnl.component';

describe('HalfPortraitPnlComponent', () => {
  let component: HalfPortraitPnlComponent;
  let fixture: ComponentFixture<HalfPortraitPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfPortraitPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfPortraitPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
