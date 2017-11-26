import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import LandingToolBar from '../components/LandingToolBar';
import LandingFooter from '../components/LandingFooter';

const styles = {
    content: {
        'padding': '100px 15% 150px',
        'display': 'flex',
        'justify-content': 'center'
    },
    form_container: {
        'padding': '30px',
        'border': '1px solid black',
        'display': 'flex',
        'flex-direction': 'column'
    },
    button: {
        'width': '80px'
    }
};

class Singin extends Component{
    render(){
        return(
            <div>
              <div>
                nombre grupo
              </div>
              <div>
                datos grupo
              </div>
            </div>
        );
    }
}

export default Singin;
