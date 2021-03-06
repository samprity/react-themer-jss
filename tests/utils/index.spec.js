/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import { mapper } from '../../src/utils';

const testPropsInput = {
  test: 'testProp',
  theme: {
    themeProp: 'testThemeProp',
  },
  sheet: {
    classes: {
      root: 'root-class-1234',
    },
  },
  classes: {
    root: 'root-class-1234',
  },
};

const testPropsInputClasses = {
  test: 'testProp',
  classes: {
    root: 'root-class-1234',
  },
};

describe('mapper', () => {
  test('maps props.sheet.classes property to props.theme.styles', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.theme.styles.root).toBe('root-class-1234');
  });

  test('maps props.classes property to props.theme.styles', () => {
    const testPropsOutput = mapper(testPropsInputClasses);
    expect(testPropsOutput.theme.styles.root).toBe('root-class-1234');
  });

  test('returns empty object in props.theme.styles if no sheet prop is found in input props', () => {
    const testPropsOutput = mapper({ test: 'test' });
    expect(testPropsOutput).toEqual({ test: 'test' });
  });

  test('keeps existing props', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.test).toBe('testProp');
  });

  test('merges existing props.theme object if defined', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.theme.themeProp).toBe('testThemeProp');
  });

  test('removes props.sheet', () => {
    const testPropsOutput = mapper(testPropsInput);
    expect(testPropsOutput.sheet).toBe(undefined);
  });
});
