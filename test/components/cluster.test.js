import React from 'react';
import {expect} from 'chai';
import {render, shallow} from 'enzyme';

import Cluster, {visibleRows, paddedRange, inRange} from 'components/cluster';

describe('Cluster', () => {
  const rows = [1, 2, 3, 4, 5];

  it('sets overflow style by default', () => {
    const el = render(<Cluster>{rows}</Cluster>);
    expect(el).to.have.style('overflow', 'scroll');
  });

  it('sets additional class names', () => {
    const el = render(<Cluster className="foo">{rows}</Cluster>);
    expect(el).to.have.className('foo');
  });

  it('renders rows in range', () => {
    const el = shallow(<Cluster height={100} rowHeight={10}>{rows}</Cluster>);
    expect(el).to.contain.text(5);
  });

  it('does not render rows out of range', () => {
    const el = shallow(<Cluster height={100} rowHeight={50}>{rows}</Cluster>);
    expect(el).to.not.contain.text(5);
  });
});

describe('visibleRows', () => {
  it('returns the number of visible rows', () => {
    expect(visibleRows({height: 100, rowHeight: 20})).to.be.eq(5);
    expect(visibleRows({height: 100, rowHeight: 21})).to.be.eq(5);
    expect(visibleRows({height: 100, rowHeight: 25})).to.be.eq(4);
  });
});

describe('paddedRange', () => {
  it('returns a padded range', () => {
    expect(paddedRange({start: 0, end: 10})).to.deep.eq({start: -5, end: 15});
    expect(paddedRange({start: 5, end: 10})).to.deep.eq({start: 2, end: 13});
  });
});

describe('inRange', () => {
  const range = {start: 0, end: 10};

  it('returns true if value is in range', () => {
    expect(inRange(5, range)).to.be.eq(true);
  });

  it('returns false if value is not in range', () => {
    expect(inRange(15, range)).to.be.eq(false);
  });
});
