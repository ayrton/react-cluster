/* @flow */

import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Cluster from '../../../lib';

/**
 * Types.
 */

type State = {
  cursor: number,
  nextCursor: ?number,
  index: number,
  isLoading: boolean,
  numberOfItems: number,
};

/**
 * App component.
 */

export default class App extends React.Component {
  state: State = { cursor: -1, nextCursor: null, index: 0, isLoading: false, numberOfItems: 100 };

  shouldComponentUpdate: Function = shouldPureComponentUpdate;

  constructor(props: void): void {
    super(props);

    this.loadMoreItems = this.loadMoreItems.bind(this);
    this.setCursor = this.setCursor.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  render(): ReactElement {
    const {cursor, nextCursor, index, isLoading, numberOfItems} = this.state;

    return (
      <div>
        <Cluster className="cluster" height={300} onIndexChange={this.setIndex} onScrollChange={this.setCursor} onScrollEnd={this.loadMoreItems} rowHeight={30}>
          {renderItems(numberOfItems)}
        </Cluster>

        <pre>
          index: {index}<br />
          cursor: {cursor} {nextCursor && `/ ${nextCursor}`}
        </pre>

        {isLoading &&
          <strong>
            APPENDING MORE POSTS
          </strong>
        }
      </div>
    );
  }

  loadMoreItems(): void {
    if (this.state.isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    setTimeout(() => {
      const {numberOfItems} = this.state;

      this.setState({ isLoading: false, numberOfItems: numberOfItems + 100 });
    }, 500);
  }

  setCursor({scrollTop, scrollHeight}: HTMLElement): void {
    this.setState({cursor: scrollTop, nextCursor: scrollHeight});
  }

  setIndex(index: number): void {
    this.setState({index});
  }
}

/**
 * Renders a bunch of spans with the index as content.
 */

function renderItems(numberOfItems: number): Array<ReactElement> {
  const items = Array(numberOfItems).fill(0).map((_, index) => index);

  return items.map((item) => (
    <span className="item" key={item}>{item}</span>
  ));
}
