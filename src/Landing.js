import React, { Component}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//View of Links
import Intro from './views/Intro'
import Login from './views/Login';
import Singin from './views/Singin';
import AboutUs from './views/AboutUs';
import NotFound from './views/NotFound'

class Landing extends Component{
    render(){
        return(
                <Router>
                        <Switch>
                            <Route exact path='/' component={Intro} />
                            <Route exact path='/Login' component={Login} />
                            <Route exact path='/Singin' component={Singin} />
                            <Route exact path='/AboutUs' component={AboutUs} />
                            <Route component={NotFound} />
                        </Switch>
                </Router>  
        );
    }
}

export default Landing;