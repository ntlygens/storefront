/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerPnlComponent } from './banner-pnl.component';

describe('BannerPnlComponent', () => {
  let component: BannerPnlComponent;
  let fixture: ComponentFixture<BannerPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
