import React, { Component}  from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import ToolbarSeparator from 'material-ui/Toolbar/ToolbarSeparator'

import './LandingToolBar.css'

class LandingToolBar extends Component{        
    render(){
        return(  
            <div className="ToolBar">
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