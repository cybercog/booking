import React from 'react';
import {
  TabBar,
  Icon,
  Badge
} from 'amazeui-touch';

var MenuBar = React.createClass({

  getInitialState:function(){
    return {selected:this.props.selected||'home'}
  },

  handleClick:function(key,e){
    this.setState({selected:key});
  },

  render:function(){
    return (
      <TabBar onSelect={this.handleClick} amStyle="warning">
        <TabBar.Item
          eventKey="home"
          active={this.state.selected === 'home'}
          icon="home"
          title="首页"
        />
        <TabBar.Item
          active={this.state.selected === 'gear'}
          eventKey="gear"
          icon="gear"
          title="设置"
        />
        <TabBar.Item
          active={this.state.selected === 'info'}
          eventKey="info"
          icon="info"
          badge={5}
          title="信息"
        />
      </TabBar>
    );
  }
});

export default MenuBar;
