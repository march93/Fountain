import React, { Component } from 'react';
import './List.css';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const AppBarTop = () => (
    <AppBar
        title = {<span>All Fountains in Vancouver</span>}
        showMenuIconButton = {false}
    />
  );

const Cards = () => (
  <div>
    <h2>Cards</h2>
  </div>
)

class List extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <div>
                <AppBarTop />
                <Cards />
            </div>
        );
    }
}

export default List;
