import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bar';

  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = false;

    // if(loading) {
    //   return <h4>Loading...</h4>
    // }

    return (
      <div className="app">
        {loading ? <h4>Loading...</h4> 
          : <h1>Hello {showName && name }</h1>}
      </div>
    );
  }
}

export default App;
