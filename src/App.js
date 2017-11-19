import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingToolbar from './landing/LandingToolBar';

class App extends Component {
  render() {
    return (            
        <MuiThemeProvider>          
          <LandingToolbar/>    
        </MuiThemeProvider>      
    );
  }
}

export default App;
