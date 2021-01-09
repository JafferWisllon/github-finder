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

  // Search Users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    
    this.setState({
      users: res.data.items,
      loading: false
    })

  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false 
    })
  }

  render() {
    const { loading, users } = this.state
    return (
      <div className="app">
        <Navbar />
        <div className="container">
          <Search 
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
