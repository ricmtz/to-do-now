import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Landing from './landing/Landing'

class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <Landing/>
            </MuiThemeProvider>
        );
    }
}

export default App;