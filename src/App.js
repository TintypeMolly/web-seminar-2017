import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {drawerOpened: false};
  }

  handleDrawerToggle = () => this.setState({drawerOpened: !this.state.drawerOpened});

  render() {
    return (
      <div>
        <AppBar
          title='Kanna'
          onTitleTouchTap={() => browserHistory.push('/')}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
        />
        <Drawer
          open={this.state.drawerOpened}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpened: open})}
        >
          <MenuItem onTouchTap={
            () => {
              browserHistory.push('about');
              this.handleDrawerToggle();
            }
          }>
            About
          </MenuItem>
          <MenuItem onTouchTap={this.handleDrawerToggle}>Bar</MenuItem>
          <MenuItem onTouchTap={this.handleDrawerToggle}>Baz</MenuItem>
        </Drawer>
        <div style={{
          padding: 20
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
