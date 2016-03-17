import React from 'react';
import {
  Container,
  Slider
} from 'amazeui-touch';

class HotelPage extends React.Component {
  render(){

    let {
      children,
      ...props
    } = this.props;

    return (
      <Container {...this.props}>
        {children}
      </Container>
    );
  }
}
