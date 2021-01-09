import React from 'react'

class Search extends React.Component {
  state = {
    text: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text)
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
