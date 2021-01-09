import './App.css';
import React from 'react';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    
    const res = await axios.get('https://api.github.com/users')
    
    this.setState({
      users: res.data
    })

    this.setState({ loading: false })
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
