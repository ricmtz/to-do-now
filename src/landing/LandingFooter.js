import React, {Component} from 'react';

const styles = {
    footer:{
        'background': '#424242',
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'height': '50px',
        'color': '#FFFFFF'
    }
};

class FooterLanding extends Component{
    render(){
        return(
            <div style={styles.footer}>                                
            </div>
        );
    }    
}

export default FooterLanding;