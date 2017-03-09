import React, { Component } from 'react';
import { history } from './AppRoute';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

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
          onTitleTouchTap={() => history.push('/')}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
        />
        <Drawer
          open={this.state.drawerOpened}
          docked={false}
          onRequestChange={(open) => this.setState({drawerOpened: open})}
        >
          <MenuItem
            onTouchTap={
              () => {
                history.push('about');
                this.handleDrawerToggle();
              }
            }
          >
            About
          </MenuItem>
          <MenuItem
            primaryText='Bar'
            onTouchTap={
              () => {
                history.push('no-such-url');
                this.handleDrawerToggle();
              }
            }
          />
          <MenuItem
            primaryText='Family Members'
            rightIcon={<ArrowDropRight/>}
            menuItems={[
              <MenuItem onTouchTap={this.handleDrawerToggle}>Kobayashi</MenuItem>,
              <MenuItem onTouchTap={this.handleDrawerToggle}>Thor</MenuItem>,
              <MenuItem onTouchTap={this.handleDrawerToggle}>Quetzalcoatl</MenuItem>,
              <MenuItem onTouchTap={this.handleDrawerToggle}>Fafnir</MenuItem>,
            ]}
          />
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
