import React, { Component } from 'react';

import Task from '../components/task';

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

class TaskList extends Component{

  render(){
      return(
        <div style={styles.paperStyle}>
          <Task titleTask="actividad 1" />
          <Task titleTask="actividad 2" />
          <Task titleTask="actividad x" />
          <Task titleTask="actividad y" />
          <Task titleTask="actividad +" />
        </div>
      );
  }
}

export default TaskList;
