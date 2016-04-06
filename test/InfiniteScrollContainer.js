import assert                  from 'power-assert';
import React                   from 'react';
import ReactDOM                from 'react-dom';
import InfiniteScrollContainer from '../src/InfiniteScrollContainer';

describe('InfiniteScrollContainer', () => {

  beforeEach(() => {
    document.body.innerHTML = window.__html__['test/InfiniteScrollContainer.html'];
  });

  it('calls onScroll when inner the children scrolled', (done) => {
    let count = 0;

    const DOM = ReactDOM.render(
      <InfiniteScrollContainer onScroll={() => count++} throttle={0}>
        <div style={{ height: 200 }}>foo</div>
      </InfiniteScrollContainer>,
      document.querySelector('#app'),
    );

    DOM.refs.outer.scrollTop = 100;

    setTimeout(() => {
      assert(count === 1);
      done();
    }, 0);
  });

});
