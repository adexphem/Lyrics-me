import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    trackList: [],
    heading: "Top 10 tracks"
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_Cors_Bypass + process.env.REACT_APP_MusicMatch_BaseUrl}chart.tracks.get?page=1&page_size=10&country=nga&f_has_lyrics=1&apikey=${process.env.REACT_APP_MusicMatch_Key}`)
      .then(result => {
        this.setState({
          trackList: result.data.message.body.track_list
        });
      })
      .catch(error => console.log("Error ", error))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

