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

    let transition = children.props.transition || 'sfr';

    return (
      <Container direction="column">
        <Header/>
        <Container transition={transition}>
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <FootBar location={location} params={params}/>
      </Container>
    );
  }
}

App.propTypes = { children: PropTypes.element };

export default App;
