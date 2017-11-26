import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

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
                <div style={styles.content}>
                    <div style={styles.form_container}>
                        <h1>Registrate</h1>
                        <p>o <a href={'/Login'}>Iniciar sesion</a></p>
                        <TextField
                            hintText= "Nombre"
                        />
                        <TextField
                            hintText= "Apellido"
                        />
                        <TextField
                            hintText= "e-mail"
                        />
                        <TextField
                            hintText= "Contraseña"
                        />
                        <Checkbox
                            label="Acepto terminos y condiciones."
                        />
                        <RaisedButton
                            label="Aceptar"
                            primary={true}
                            style={styles.button}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Singin;
