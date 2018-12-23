import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Mui from './material-ui/Mui';

class App extends Component {
  render() {
    return (
      <div>
        文字按钮
        <br/>
        <Button color="primary">
          Hello World
        </Button>
        <br/>
        描边按钮
        <br/>
        <Button variant="outlined" color="primary">
          Hello World
        </Button>
        <br/>
        实心按钮
        <br/>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br/>
        浮动按钮
        <br/>
        <Fab color="primary" size = "small">
          <Add />
        </Fab>
        <List component = "nav">
          <ListItem button = "true">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="列表1" />
          </ListItem>
          <ListItem button = "true">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="列表1" />
          </ListItem>
          <ListItem button = "true">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="列表1" />
          </ListItem>
          <ListItem button = "true">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="列表1" />
          </ListItem>
        </List>
        <Mui>
          
        </Mui>
      </div>
    );
  }
}

export default App;
