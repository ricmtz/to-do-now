import React, { Component } from 'react';

import LandingToolBar from '../components/LandingToolBar';
import LandingFooter from '../components/LandingFooter';

const styles = {};

class AboutUs extends Component{
    render(){
        return(
            <div>
                <LandingToolBar/>
                <div>
                    <h1>Acerca de nosostros.</h1>
                </div>
                <LandingFooter/>
            </div>
        );
    }
}

export default AboutUs;