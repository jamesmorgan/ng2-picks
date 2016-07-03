/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CompetitionsListComponent } from './competitions-list.component';

describe('Component: CompetitionsList', () => {
  it('should create an instance', () => {
    let component = new CompetitionsListComponent();
    expect(component).toBeTruthy();
  });
});
