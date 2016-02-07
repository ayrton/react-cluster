import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

import Cluster from 'components/cluster';

describe('Cluster', () => {
  it('renders hello world', () => {
    const el = render(<Cluster />);
    expect(el).to.have.text('hello world');
  });
});
