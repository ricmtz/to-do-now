import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import LandingToolbar from '../components/LandingToolBar';
import LandingFooter from '../components/LandingFooter';

const styles = {
    content:{                
        'padding': '100px 15% 150px'
    },
    login_container: {
        'display': 'flex',
        'align-items': 'center',
        'flex-direction': 'column'
    },
    form_container: {
        'padding': '30px',
        'border': '1px solid black'
    },    
    header2: {                
        'border-bottom': '1px solid black'
    },
    button :{
        'max-width': '80px',
        'margin': 'auto',        
    }
};

class Login extends Component{
    render(){
        return(                       
            <div>
                <LandingToolbar/>
                <div style={styles.content}>
                    <div style={styles.login_container}>
                        <div style={styles.form_container}>
                            <h2 style={styles.header2}>Iniciar Sesion</h2>
                            <p>Usuario</p>
                            <TextField 
                                hintText="ejemplo123"
                            />                    
                            <p>Contraseña</p>
                            <TextField 
                                type="password" 
                                hintText="****"
                            />
                            <div style={styles.button_container}>
                                <RaisedButton 
                                    label="Aceptar" 
                                    primary={true} 
                                    style={styles.button}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <LandingFooter/>
            </div>
        );
    }
}

export default Login;