import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Task from '../components/task';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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

class TaskDetails extends Component{

  render(){
      return(
        <div style={styles.paperStyle}>
          <Task titleTask="actividad 1" />
            <div style={styles.paperStyle}>
            <Paper style={styles.paperStyle}>
              <List>
                <ListItem primaryText="Estado: en progreso" />
                <ListItem primaryText="Tags: Escuela, Proyecto" />
                <ListItem primaryText="Fecha de inicio: 12/12/2019" />
                <ListItem primaryText="Notas: no usar wikipedia como fuente!" />
              </List>
              <Divider />
              <Task titleTask="sub 1"/>
              <Task titleTask="sub 2"/>
              <Task titleTask="sub x"/>
            </Paper>
            </div>
        </div>
      );
  }
}

export default TaskDetails;
