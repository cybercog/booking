import React from 'react';
import MenuBar from '../components/MenuBar.js';

class HomePage extends React.Component {

  render(){
    return (
        <div className="menu-bar">
            <MenuBar selected="home" />
        </div>
    );
  }

}

export default HomePage;
