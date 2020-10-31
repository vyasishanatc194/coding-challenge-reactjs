import React, { Component } from "react";
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import LikePage from '../Likes/Likes';

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LikePage} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default Main;
