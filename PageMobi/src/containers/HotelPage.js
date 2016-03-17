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

HotelPage.List = React.createClass({

  render: () => {
    return (
      <h2>This is Hotel List Page</h2>
    );
  }

});

HotelPage.Detail = React.createClass({

  render: ()=>{
    return (
      <h2>This is Hotel Detail Page</h2>
    );
  }

});


export default HotelPage;
