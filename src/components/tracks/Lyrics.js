import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
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
            <h4 className="card-header">
              {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
            </h4>
            <div className="card-body">
              <p className="card-text">
                {lyrics.lyrics_body}
              </p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID </strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre </strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Release Date </strong>: <Moment format="YYYY/MM/DD">{track.first_release_date}</Moment>
            </li>
          </ul>
        </React.Fragment>
      )
    } else {
      return <Spinner imgHeight="50px" />;
    }
  }
}

export default Lyrics;
