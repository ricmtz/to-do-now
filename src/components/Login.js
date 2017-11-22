import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    content:{                
        'margin': 'auto',
        'display': 'flex',
        'flex-direction': 'column'        
    }
};

class Login extends Component{
    render(){
        return(                       
            <div style={styles.content}>
                    <h2>Iniciar Sesion</h2>
                    <p>Usuario</p>
                    <TextField />
                    <br/>
                    <p>Contraseña</p>
                    <TextField type="password" />
            </div>
        );
    }
}

export default Login;