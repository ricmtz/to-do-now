import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    footer:{
        'background': '#424242',
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'height': '40px',
        'color': '#FFFFFF'
    },
    contact:{
        'position': 'fixed',
        'right': '0'        
    },
    contact_btn:{
        'color': "#FFFFFF"
    }
};

class FooterLanding extends Component{
    render(){
        return(
            <div style={styles.footer}>
                <div style={styles.contact}>
                <FlatButton
                        style={styles.contact_btn}
                        href=""
                        target="_self"
                        label="Facebook"
                    />
                    <FlatButton
                        style={styles.contact_btn}
                        href="" 
                        target="_self"
                        label="GitHub"
                    />                    
                </div>                                
            </div>
        );
    }    
}

export default FooterLanding;