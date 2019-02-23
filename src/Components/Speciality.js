import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('./Images/specBG3.jpg');
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`

const Container = styled.div`
  background-color: #ffffffbf;
  border-radius: 3.5px;
  height: 85%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.5fr 2.2fr;
  grid-template-areas: "Title Title" "Header Pic" "Text Pic";
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    width: 95%;
  }
`

const Title = styled.h1`
  grid-area: Title;
  text-align: center;
  font: normal 600 2.3em Merriweather;
`


const Header = styled.h2`
  grid-area: Header;
`

const Text = styled.p`
  grid-area: Text;
  align-self: flex-start;
`

const Pic = styled.div`
  grid-area: Pic;
  background-image: url(./Images/spec.jpg);
  background-size: contain;
  background-attachment: fixed;
  background-position: right;
  width: 28em;
  margin: auto;
  align-self: center;
  border-radius: 2%;
  height: 80%;
  filter: saturate(1.5) opacity(0.75) hue-rotate(-350deg);
`

class Speciality extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef}>
        <Container>
          <Title>This Month's Special</Title>
          <Header>Open-faced Avocado Sweet Potato Tacos</Header>
          <Text>Fresh chunks of avocado and caramelized sweet potatoes on a whole wheat tortilla, featuring crisp red onions, with just a hint of tangy feta cheese.
We've balanced the sweet and salty softness with our fresh and crunchy red onion for a whole new taste experience!</Text>
          <Pic />
        </Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Speciality innerRef={ref} {...props}/>); 
