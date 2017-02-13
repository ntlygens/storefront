/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortraitPnlComponent } from './portrait-pnl.component';

describe('PortraitPnlComponent', () => {
  let component: PortraitPnlComponent;
  let fixture: ComponentFixture<PortraitPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
