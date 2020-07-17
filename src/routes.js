import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/repository/:repository' component={Repository}/>
            </Switch>
        </BrowserRouter>
    )
}
