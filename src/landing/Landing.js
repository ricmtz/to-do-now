import React, { Component}  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components needed to show the web.
import LandingToolbar from './LandingToolBar';
import LandingFooter from './LandingFooter';
//View of Links
import Intro from '../components/Intro'
import Login from '../components/Login';
import NotFound from '../components/NotFound'

const styles = {
    body:{
        'padding': '150px 15% 150px',
        'margin': 'auto',
        'display': 'flex',
        'flex-direction': 'column'    
    }
};
class Landing extends Component{
    render(){
        return(
            <div >
                <LandingToolbar/>
                <Router>
                    <div style={styles.body}>
                        <Switch>
                            <Route exact path='/' component={Intro} />
                            <Route exact path='/Login' component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>  
                <LandingFooter/>    
            </div>            
        );
    }
}

export default Landing;