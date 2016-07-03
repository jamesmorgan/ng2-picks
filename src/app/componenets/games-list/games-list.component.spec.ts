/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GamesListComponent } from './games-list.component';

describe('Component: GamesList', () => {
  it('should create an instance', () => {
    let component = new GamesListComponent();
    expect(component).toBeTruthy();
  });
});
