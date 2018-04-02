import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
      super(props);

      this.state = {term:''};
  }

    render(){
      return (
        <div>
          <input onChange={event => this.setState({ term: event.target.value}) } />
        </div>
      )
    }
  }
//The old code:
//   render(){
//     return <input onChange={this.onInputChange} />;
//   }
//
//   onInputChange(event){
//     console.log(event.target.value);
//   }
// }

export default SearchBar;
