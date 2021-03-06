import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './landing/Landing';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}