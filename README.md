# react-infinite-scroll-container

A simple container component for infinite scroll.

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
