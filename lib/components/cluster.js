/* @flow */

import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

/**
 * Types.
 */

type Props = {
  children: Array<ReactElement>,
  className: ?string,
  height: number,
  rowHeight: number,
};

type State = {
  index: number,
};

type Range = {
  start: number,
  end: number,
};

/**
 * Defaults.
 */

const INITIAL_STATE =  {
  index: 0,
};

/**
 * Cluster component.
 *
 * Displays large sets of data in a scroll container.
 */

export default class Cluster extends React.Component {
  props: Props;

  state: State = INITIAL_STATE;

  shouldComponentUpdate: Function = shouldPureComponentUpdate;

  componentDidMount(): void {
    this.cluster.addEventListener('scroll', this.setCurrentIndex.bind(this));
  }

  componentWillUnmount(): void {
    this.cluster.removeEventListener('scroll', this.setCurrentIndex.bind(this));
  }

  setCurrentIndex(): void {
    this.setState({index: this.currentIndex()});
  }

  render(): ReactElement {
    const {className, height} = this.props;

    const style = {
      height,
      overflow: 'scroll',
    };

    return (
      <div className={className} ref={(ref) => this.cluster = ref} style={style}>
        {this.renderRows()}
      </div>
    );
  }

  /**
   * Wrap each child in a fixed height container and conditionally
   * render the child.
   */

  renderRows(): Array<ReactElement> {
    const {children, rowHeight} = this.props;

    const range = this.currentRange();

    const style = {
      height: rowHeight,
    };

    return children.map((child, index) => (
      <div key={index} style={style}>
        {inRange(index, range) ? child : null}
      </div>
    ));
  }

  currentIndex(): number {
    return Math.floor(this.cluster.scrollTop / this.props.rowHeight);
  }

  currentRange(): Range {
    const start = this.state.index;
    const end = start + visibleRows(this.props);

    return paddedRange({start, end});
  }
}

/**
 * Return the number of visible rows inside the scrollable container.
 */

export function visibleRows({height, rowHeight}: {height: number, rowHeight: number}): number {
  return Math.ceil(height / rowHeight);
}

/**
 * Return a padded range.
 */

export function paddedRange({start, end}: Range): Range {
  const padding = Math.ceil((end - start) / 2);

  return {
    start: start - padding,
    end: end + padding,
  };
}

/**
 * Return true if value is in range.
 */

export function inRange(value: number, {start, end}: Range): boolean {
  return value >= start && value <= end;
}
