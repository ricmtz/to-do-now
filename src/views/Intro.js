import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



const styles = {
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

class Intro extends Component{
    render(){
        return(
            <div>

                <div style={styles.content}>
                    <h1 style={styles.title}>To Do Now</h1>
                    <RaisedButton
                        label="Iniciar"
                        href={'/Login'}
                        primary={true}
                        style={styles.button}
                    />
                </div>
            </div>
        );
    }
}

export default Intro;
