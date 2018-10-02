import React, { Component } from 'react';
//import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    trackTitle: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Consumer>
        {value => {
           return(
             <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Song Search Arena
              </h1>
              <p className="lead text-center">Grab Song Lyrics</p>
              <form>
                <div className="form-group">
                  <input type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Search by Song Title...."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}/>
                </div>
                <button className="btn btn-secondary btn-lg btn-block mb-5" type="submit">
                  Get Lyrics
                </button>
              </form>
             </div>
           );
        }}
      </Consumer>
    )
  }
}

export default Search