import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { range } from 'lodash';

import InfiniteScrollContainer from '../src/InfiniteScrollContainer';

storiesOf('InfiniteScroll', module)
  .add('No scroll', () => (
    <div style={{ position: 'relative', width: 300, height: 500 }}>
      <InfiniteScrollContainer onScroll={action('scrolled')}>

        {range(3).map(i => (
          <div style={{ height: 100, border: '1px solid blue' }} key={i}> {i} </div>
        ))}

      </InfiniteScrollContainer>
    </div>
  ))
  .add('scroll', () => (
    <div style={{ position: 'relative', width: 500, height: 500 }}>
      <InfiniteScrollContainer onScroll={action('scrolled')}>

        {range(10).map(i => (
          <div style={{ height: 100, border: '1px solid red' }} key={i}> {i} </div>
        ))}

      </InfiniteScrollContainer>
    </div>
  ));
