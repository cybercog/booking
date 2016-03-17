import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import {TabBar} from 'amazeui-touch';

class FootBar extends React.Component{

  render(){

    let {
      location,
      params,
      ...props
      } = this.props;

    return (
      <TabBar
            amStyle="primary"
          >
            <TabBar.Item
              component={Link}
              icon="home"
              title="首页"
              selected={location.pathname === '/'}
              to="/"
            />
            <TabBar.Item
              component={Link}
              icon="info"
              title="酒店"
              badge='β'
              selected={location.pathname === '/hotels'}
              to="/hotels"
            />
            <TabBar.Item
              component={Link}
              icon="info"
              title="航班"
              badge='β'
              selected={location.pathname === '/flights'}
              to="/flights"
            />
          </TabBar>
    );
  }
}

export default FootBar;
