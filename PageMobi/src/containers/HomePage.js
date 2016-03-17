import React from 'react';
import {
  Container,
  Slider
} from 'amazeui-touch';

//test data
const sliderIntance = (
  <Slider>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
    </Slider.Item>
  </Slider>
);
//

class HomePage extends React.Component {

  render(){
    return (
      <Container {...this.props}>
        {sliderIntance}
        <h2>hahahaha</h2>
      </Container>
    );
  }

}

export default HomePage;
