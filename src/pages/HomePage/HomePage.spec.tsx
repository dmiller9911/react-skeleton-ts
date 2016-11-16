jest.unmock('./HomePage');

import HomePage from './HomePage';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';

describe('HomePage', () => {
  it('matches snapshot', () => {
    expect(shallowToJson(shallow(<HomePage />))).toMatchSnapshot();
  });
});
