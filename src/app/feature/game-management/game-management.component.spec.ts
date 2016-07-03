/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameManagementComponent } from './game-management.component';

describe('Component: GameManagement', () => {
  it('should create an instance', () => {
    let component = new GameManagementComponent();
    expect(component).toBeTruthy();
  });
});
