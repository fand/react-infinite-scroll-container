import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { range } from 'lodash';

import InfiniteScrollContainer from '../src/InfiniteScrollContainer';

// Load CSS file
require('./main.css');

storiesOf('InfiniteScroll', module)
  .add('No scroll', () => (
    <div className="Wrapper">
      <InfiniteScrollContainer onScroll={action('scrolled')}>

        {range(3).map(i => (
          <div className="Item" key={i}> {i} </div>
        ))}

      </InfiniteScrollContainer>
    </div>
  ))
  .add('scroll', () => (
    <div className="Wrapper">
      <InfiniteScrollContainer onScroll={action('scrolled')}>

        {range(10).map(i => (
          <div className="Item" key={i}> {i} </div>
        ))}

      </InfiniteScrollContainer>
    </div>
  ));
