import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    trackId: this.props.match.params.id
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_Cors_Bypass + process.env.REACT_APP_MusicMatch_BaseUrl}track.lyrics.get?track_id=${this.state.trackId}&apikey=${process.env.REACT_APP_MusicMatch_Key}`)
      .then(res => {
        this.setState({lyrics: res.data.message.body.lyrics});

        // retrieving the track info - note axios.getall could also be used here
        axios.get(`${process.env.REACT_APP_Cors_Bypass + process.env.REACT_APP_MusicMatch_BaseUrl}track.get?track_id=${this.state.trackId}&apikey=${process.env.REACT_APP_MusicMatch_Key}`)
        .then(res => {
          this.setState({track: res.data.message.body.track});
        });
      })
      .catch(err => console.log("error ", err))
  }

  render() {
    const {track, lyrics } = this.state;
    if(Object.keys(track).length > 0 && Object.keys(lyrics).length > 0) {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">Back</Link>
          <div className="card">
            <div className="card-header">
              {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return <Spinner imgHeight="50px" />;
    }
  }
}

export default Lyrics;
