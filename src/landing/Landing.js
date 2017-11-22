import React, { Component}  from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import LandingToolbar from './LandingToolBar';
import LandingFooter from './LandingFooter';

const styles = {
    body:{
        'margin': '0',
        'padding': '0',
        'font-family': 'sans-serif'
    },
    content:{
        'padding': '150px 15% 150px',
        'margin': 'auto',
        'display': 'flex',
        'flex-direction': 'column'
    },
    title:{        
        'font-size': '60px',
        'text-align': 'center',
        'font-style': 'italic'            
    },
    button :{
        'max-width': '80px',
        'margin': 'auto'
    }
};

class Landing extends Component{
    render(){
        return(
            <div >
                <LandingToolbar/>
                <div style={styles.content}>
                    <h1 style={styles.title}>To Do Now</h1>
                    <RaisedButton label="Iniciar" primary={true} style={styles.button} />
                </div>
                <LandingFooter/>
            </div>            
        );
    }
}

export default Landing;