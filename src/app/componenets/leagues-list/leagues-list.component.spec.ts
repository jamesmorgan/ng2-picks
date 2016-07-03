/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LeaguesListComponent } from './leagues-list.component';

describe('Component: LeaguesList', () => {
  it('should create an instance', () => {
    let component = new LeaguesListComponent();
    expect(component).toBeTruthy();
  });
});
