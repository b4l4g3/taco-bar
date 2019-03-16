import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('./Images/location.jpg');
  background-repeat: repeat;
  background-position: bottom;
  background-size: cover;
`

const Container = styled.div`
  width: 50%;
  height 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 1.7fr;
  grid-template-areas: "Header Header" "Text Map";
  background-color: #c5c2bfdb;
  color: black;
`

const Header = styled.p`
  grid-area: Header;
  text-align: center;
  margin: 0.75em 0 0 0;
  font: 600 normal 2em Merriweather
`

const Text = styled.p`
  height: 40%;
  width: 80%;
  grid-area: Text;
  text-align: center;
`

const Mapouter = styled.div`
  text-align: right;
  grid-area: Map;
  height: 40%;
  width: 80%;
`

const Canvas = styled.div`
  overflow: hidden;
  background: none;
  height: 100%;
  width: 100%;
`

const Frame = styled.iframe`
  height: 100%;
  width: 100%;
`

export class Location extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef} >
        <Container>
          <Header>Location</Header>
          <Text>Asd</Text>
          <Mapouter><Canvas><Frame title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=35%20Bridge%20St%2C%20Bradford%2C%20UK&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"></Frame></Canvas></Mapouter>
        </Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Location innerRef={ref} {...props} />);
