import { throttle } from 'lodash';
import React        from 'react';

const PADDING  = 100;
const INTERVAL = 300;

const STYLE = {
  outer : {
    position  : 'absolute',
    top       : 0,
    left      : 0,
    width     : '100%',
    height    : '100%',
    margin    : 0,
    padding   : 0,
    overflowY : 'auto',
  },
  inner : {
    width : '100%',
  },
};

/**
 * 無限リスト用のラッパー
 * スクロールイベントだけを管理する
 */
class InfiniteScrollContainer extends React.Component {

  componentDidMount () {
    this._interval = Number.isFinite(this.props.interval) ? +this.props.interval : INTERVAL;
    this._padding  = Number.isFinite(this.props.padding) ? +this.props.padding   : PADDING;

    this._onScroll = throttle((e) => this.onScroll(e), this._interval);
    this.refs.outer.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount () {
    this.refs.outer.removeEventListener('scroll', this._onScroll);
    this._onScroll = null;  // 循環参照しているため、明示的に破棄する
  }

  onScroll (e) {
    if (this.props.disabled) { return; }

    const target    = e.target;
    const remaining = target.scrollHeight - (target.clientHeight + target.scrollTop);

    if (remaining < this._padding) {
      this.props.onScroll();
    }
  }

  render () {
    return (
      <div className="InfiniteScroll" ref="outer"
        style={STYLE.outer}
        onScroll={this._onScroll}>
        <div className="InfiniteScroll__Inner" style={STYLE.inner}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

InfiniteScrollContainer.propTypes = {
  children : React.PropTypes.node,
  disabled : React.PropTypes.bool,
  padding  : React.PropTypes.number,
  interval : React.PropTypes.number,
  onScroll : React.PropTypes.func.isRequired,
};

export default InfiniteScrollContainer;
