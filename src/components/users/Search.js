import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text)
    this.setState({text: ''});
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input 
          type="text" 
          name="text" 
          placeholder="Search user..."
          value={this.state.text}  
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block"
        />
      </form>
    )
  }
}

export default Search
