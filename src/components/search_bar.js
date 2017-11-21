import React, { Component } from 'react';

// -- Stateless Component -- //
// const SearchBar = () => {
//   return <input />
// };

// -- Class Component -- //
class SearchBar  extends Component {
  constructor(props) {
    super(props);
    // You can change the default state.
    this.state = { term: '' };
  }
  
  render() {
    return ( 
      <div className="search-bar">
        <input 
          // This caused the input changed to its state
          value={this.state.term}
          // When input changed, it doesn't output the input. It changes the state.
          onChange={e => this.onInputChange(e.target.value)} 
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  // render() {
  //   return <input onChange={e => console.log(e.target.value)} />
  // }

  // -- This can be done instead of above -- //
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;