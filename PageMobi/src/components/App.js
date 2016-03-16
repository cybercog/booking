import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import {Container} from 'amazeui-touch';
import Header from './Header';
import FootBar from './FootBar';

class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let {
        location,
        params,
        children,
        ...props
        } = this.props;

    return (
      <Container direction="column">
        <Header/>
        {children}
        <FootBar location={location} params={params}/>
      </Container>
    );
  }
}

App.propTypes = { children: PropTypes.element };

export default App;
