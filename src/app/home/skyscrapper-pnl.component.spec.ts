/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkyscraperPnlComponent } from './skyscrapper-pnl.component.ts';

describe('SkyscraperPnlComponent', () => {
  let component: SkyscraperPnlComponent;
  let fixture: ComponentFixture<SkyscraperPnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyscraperPnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyscraperPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
