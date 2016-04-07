# @fand/react-infinite-scroll-container

[![Build Status](http://img.shields.io/travis/fand/react-infinite-scroll-container.svg?style=flat-square)](https://travis-ci.org/fand/react-infinite-scroll-container)
[![NPM Version](https://img.shields.io/npm/v/@fand/react-infinite-scroll-container.svg?style=flat-square)](https://www.npmjs.com/package/@fand/react-infinite-scroll-container)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://fand.mit-license.org/)
[![Coverage Status](https://img.shields.io/coveralls/fand/react-infinite-scroll-container.svg?style=flat-square)](https://coveralls.io/github/fand/react-infinite-scroll-container?branch=master)

A simple component for infinite scroll.


## Installation

```
npm install -S @fand/react-infinite-scroll-container
```

## Example

```js
import InfiniteScrollContainer from '@fand/react-infinite-scroll-container';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      items : [],
      pos   : 0,
    };
  }

  componentDidMount () {
    this.loadNextItems();
  }

  loadNextItems () {  
    fetch(`/api/items?offset=${pos}`).then(r => r.json()).then((items) => {
      this.setState({
        items : this.state.items.concat(items),
        pos   : this.state.pos + items.length,
      });
    });    
  }

  render () {
    return (
      <div className="App">
        <InfiniteScrollContainer
          padding={100}
          throttle={300}
          onScroll={() => this.loadNextItems()}>

          {this.state.items.map((i) => <Item key={i.id} item={i} />)}

        </InfiniteScrollContainer>
      </div>
    );
  }
}
```

## LICENSE
MIT
