import React, { Component } from 'react'
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from './Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            const { trackList, heading } = value;
            if(trackList.length > 0) {
              return (
                <React.Fragment>
                  <h3 className="mb-4 text-center">{heading}</h3>
                  <div className="row">
                  {trackList.map(item => (
                    <Track track={item.track} key={item.track.track_id}/>
                  ))}
                  </div>
                </React.Fragment>
              )
            } else {
              return <Spinner imgHeight="100px" />;
            }
          }
        }
      </Consumer>
    )
  }
}

export default Tracks;
