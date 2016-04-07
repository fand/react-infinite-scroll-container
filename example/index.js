import React    from 'react';
import ReactDOM from 'react-dom';

import InfiniteScrollContainer from '@fand/react-infinite-scroll-container';

const generateNext = function (seed) {
  const items = [];
  for (let i = 0; i < 100; i++) { items.push(seed + i); }
  return items;
};

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
    const items = generateNext(this.state.pos);
    this.setState({
      items : this.state.items.concat(items),
      pos   : this.state.pos + items.length,
    });
  }

  render () {
    return (
      <div className="App">
        <InfiniteScrollContainer
          padding={100}
          interval={300}
          onScroll={() => this.loadNextItems()}>

          {this.state.items.map((i) => <div key={i}>{i}</div>)}

        </InfiniteScrollContainer>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.querySelector('#app'));
