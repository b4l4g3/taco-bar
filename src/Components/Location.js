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
  font: 600 normal 2em Merriweather;
`

const Texts = styled.div`
  padding: 1em;
`

const Text = styled.p`
  grid-area: Text;
  text-align: center;
  padding: 1em;
  font: normal 600 1em sans-serif;
  line-height: 1.3em;
  border: 1px solid black;
`

const LocText = styled.p`
  grid-area: Text;
  text-align: center;
  font: italic 800 1.3em monospace;
  padding-bottom: 1em;
  color: #691c1c;
`

const Mapouter = styled.div`
  text-align: right;
  grid-area: Map;
  padding: 1em;
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
          <Texts>
          <LocText>35 Bridge St, Bradford, UK</LocText>
          <Text>Accessible parking is available for guests and is easily accessible in parking lot NCP Bradford Hall Ings, next to the Badford Hotel, 3 mins away from our restaurant.</Text>
          </Texts>
          <Mapouter><Canvas><Frame title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=35%20Bridge%20St%2C%20Bradford%2C%20UK&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"></Frame></Canvas></Mapouter>
        </Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Location innerRef={ref} {...props} />);
