import React, { Component } from 'react';
import './App.css';

// Material UI.
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconList from 'material-ui/svg-icons/action/list';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

// React Router.
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Tabbed Pages
import List from './List.js';
import Map from './Map.js';

// Raw data.
const fountainsJson = require('./drinking_fountains.json');
const fountains = fountainsJson.features

// Icons.
const listIcon = <IconList />;
const favoriteIcon = <IconFavorite />;
const mapIcon = <IconLocationOn />;

const Favorites = () => (
  <div>
    <h2>Favorites</h2>
  </div>
)

class App extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" render={() => (
              <h1>Welcome!</h1>
            )}/>
            <Route path="/list" component={List}/>
            <Route path="/Favorites" component={Favorites}/>
            <Route path="/Map" component={Map}/>

            <Paper zDepth={1} className="paper">
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <Link to="/list">
                  <BottomNavigationItem
                    label="List"
                    icon={listIcon}
                    onClick={() => this.select(0)}
                  />
                </Link>

                <Link to="/favorites">
                  <BottomNavigationItem
                      label="Favorites"
                      icon={favoriteIcon}
                      onClick={() => this.select(1)}
                  />
                </Link>

                <Link to="/map">
                  <BottomNavigationItem
                      label="Map"
                      icon={mapIcon}
                      onClick={() => this.select(2)}
                  />
                </Link>
              </BottomNavigation>
            </Paper>
          </div>
        </Router>
        );
    }
}

export default App;
