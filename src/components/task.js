import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import LinearProgress from 'material-ui/LinearProgress';
import Details from 'material-ui/svg-icons/image/details';
import IconButton from 'material-ui/IconButton';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import ToggleCheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

const styles = {
  paperStyle:{
    padding: 30,
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
};

class Task extends Component{
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
   this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
   clearTimeout(this.timer);
  }

  progress(completed) {
   if (completed > 100) {
     this.setState({completed: 100});
   } else {
     this.setState({completed});
     const diff = Math.random() * 10;
     this.timer = setTimeout(() => this.progress(completed + diff), 1000);
   }
  }
  render(){
      return(
        <div style={styles.paperStyle}>
          <Paper>
            <AppBar
              iconElementLeft={<IconButton><Details/></IconButton>}
              title={this.props.titleTask}
              iconElementRight={<IconButton>
                <ToggleCheckBox />
                 </IconButton>}
            />
            <div style={styles.horizontal}>
              <LinearProgress mode="determinate" value={this.state.completed} />
            </div>
          </Paper>
        </div>
      );
  }
}

export default Task;
