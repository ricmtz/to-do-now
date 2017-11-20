import React, { Component}  from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class LandingToolBar extends Component{        
    render(){
        return(  
            <div>
            <AppBar                  
                title=""                
                showMenuIconButton = {false}
                iconElementRight = {<div>                                        
                                        <FlatButton label="Log In/Sing In" />                                        
                                        <FlatButton label="Acerca de" />
                                    </div>
                                    }                
            />
            </div>  
        );
    }

}

export default LandingToolBar;