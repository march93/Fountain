import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconList from 'material-ui/svg-icons/action/list';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const listIcon = <IconList />;
const favoriteIcon = <IconFavorite />;
const mapIcon = <IconLocationOn />;

class App extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
        <Paper zDepth={1} className="paper">
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
                label="List"
                icon={listIcon}
                onClick={() => this.select(0)}
            />
            <BottomNavigationItem
                label="Favorites"
                icon={favoriteIcon}
                onClick={() => this.select(1)}
            />
            <BottomNavigationItem
                label="Map"
                icon={mapIcon}
                onClick={() => this.select(2)}
            />
            </BottomNavigation>
        </Paper>
        );
    }
}

export default App;