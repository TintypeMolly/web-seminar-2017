import React, { Component } from 'react';
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
        <AppBar title="Kanna" onLeftIconButtonTouchTap={this.handleDrawerToggle}/>
        <Drawer
          open={this.state.drawerOpened}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpened: open})}
        >
          <MenuItem>Foo</MenuItem>
          <MenuItem>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
