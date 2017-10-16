import React, { Component } from 'react';
import './List.css';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconLocalBar from 'material-ui/svg-icons/maps/local-bar';
import _ from 'lodash';

const iconLocalBar = <IconLocalBar />;
const fountainsJson = require('./drinking_fountains.json');
const fountains = fountainsJson.features;

const AppBarTop = () => (
    <AppBar className="appBarTop"
        title = {<span>Fountains Around Vancouver</span>}
        showMenuIconButton = {false}
    />
);

class List extends Component {
    state = {
        selectedIndex: 0,
        numCards: 0
    };

    render() {
        const children = [];
        _.each(fountains, function(fountain, index) {
            children.push(
                <Card key={index} className="card">
                    <CardHeader
                        title={fountain.properties.NAME}
                        subtitle={fountain.properties.IN_OPERATION}
                        avatar={iconLocalBar}
                    />
                </Card>
            );
        });
        return (
            <div className="cardParent">
                <AppBarTop />
                <div className="cardWrap">
                    {children}
                </div>
            </div>
        );
    }
}

export default List;
