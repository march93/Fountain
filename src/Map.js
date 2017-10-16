import React, { Component } from 'react';

// Material UI.
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

// React Google Maps.
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"

const AppBarTop = () => (
  <AppBar
    title={<span>Map</span>}
    showMenuIconButton={false}
  />
);

const FountainMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{
      // https://github.com/tomchentw/react-google-maps/issues/385
      height: `100%`,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
  ) ((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >

    {props.isMarkerShown &&
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    }
    </GoogleMap>
);

class Map extends Component {
  render() {
    return (
      <div>
        <AppBarTop />

        <FountainMap isMarkerShown />
      </div>
    );
  }
}

export default Map;
