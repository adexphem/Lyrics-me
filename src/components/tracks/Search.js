import React, { Component } from 'react';
import axios from 'axios';
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

  getTrack = (e) => {
    e.preventDefault();

    axios.get(`${process.env.REACT_APP_Cors_Bypass + process.env.REACT_APP_MusicMatch_BaseUrl}track.search?q_track=${this.state.trackTitle}&page_size=10&apikey=${process.env.REACT_APP_MusicMatch_Key}`)
      .then(result => {
        console.log("result.data ", result.data);
        // this.setState({
        //   trackList: result.data.message.body.track_list
        // });
      })
      .catch(error => console.log("Error ", error))
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
              <form onSubmit={this.getTrack}>
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
