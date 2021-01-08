import './App.css';
import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
