import React, { Component}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//View of Links
import Intro from './views/Intro'
import Login from './views/Login';
import Singin from './views/Singin';
import AboutUs from './views/AboutUs';
import NotFound from './views/NotFound';
import Task from './components/task';
import TaskDetails from './components/taskDetails';
import TaskList from './views/taskList';
import LandingToolBar from './components/LandingToolBar';
import LandingFooter from './components/LandingFooter';

class Landing extends Component{
    render(){
        return(
                <Router>
                  <div>
                        <LandingToolBar/>
                        <Switch>
                            <Route exact path='/' component={Intro} />
                            <Route exact path='/Login' component={Login} />
                            <Route exact path='/Singin' component={Singin} />
                            <Route exact path='/AboutUs' component={AboutUs} />
                            <Route exact path='/Task/:id' component={Task} />
                            <Route exact path='/TaskList/' component={TaskList} />
                            <Route exact path='/Task/:id/Details' component={TaskDetails} />
                            <Route component={NotFound} />
                        </Switch>
                        <LandingFooter/>
                  </div>
                </Router>
        );
    }
}

export default Landing;
