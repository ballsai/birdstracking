import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import GooleMap from './components/googlemap.component';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path ='/' component = {GooleMap}/>
            </Switch>
        </Router>
    )
}

export default Routes;