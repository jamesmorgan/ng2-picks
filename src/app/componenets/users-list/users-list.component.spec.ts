/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';

describe('Component: UsersList', () => {
  it('should create an instance', () => {
    let component = new UsersListComponent();
    expect(component).toBeTruthy();
  });
});
