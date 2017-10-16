import React, { Component } from 'react';

// Material UI.
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

// Google Map React.
import GoogleMapReact from 'google-map-react';

const AppBarTop = () => (
  <AppBar
    title={<span>Map</span>}
    showMenuIconButton={false}
  />
);

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div>
        <AppBarTop />

        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          style={{
            width: `100%`,
            height: `calc(100vh - 100px)`
          }}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Hello!'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
