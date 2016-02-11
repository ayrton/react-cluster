/* @flow */

import React from 'react';

import Cluster from '../../../lib';

/**
 * App component.
 */

export default function App(): ReactElement {
  return (
    <Cluster className="cluster" height={300} rowHeight={30}>
      {renderItems()}
    </Cluster>
  );
}

/**
 * Renders OVER NINE THOUSAND spans with the index as content.
 *
 * https://www.youtube.com/watch?v=SiMHTK15Pik
 */

function renderItems(): Array<ReactElement> {
  const items = Array(10000).fill(0).map((_, index) => index);

  return items.map((item) => (
    <span className="item" key={item}>{item}</span>
  ));
}
