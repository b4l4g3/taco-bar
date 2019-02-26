import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('./Images/specBG4.jpg');
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ececec;
`

const Container = styled.div`
  background-color: #894040bf;
  border-radius: 3.5px;
  height: 85%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.8fr 0.6fr 2.2fr 0.8fr 1fr;
  grid-template-areas: "Title Title" "Icon Pic" "Header Pic" "Text Pic" "Icon2 Pic" "Icon2 Pic";
  justify-items: center;
  z-index: 10;

  @media (max-width: 400px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`

const Icon = styled.img`
  grid-area: Icon;
  height: 5em;
  align-self: center;
  margin-right: 1.3em;
`

const Icon2 = styled.img`
  grid-area: Icon2;
  height: 4.55em;
`

const Title = styled.h1`
  grid-area: Title;
  font: normal 600 2.3em Merriweather;
`

const Header = styled.h2`
  grid-area: Header;
  font: italic 600 1.5em Merriweather;
  border-bottom: 2px solid white;
  text-align: center;
  margin: 0;
  padding-bottom: 1em;

  @media (max-width: 400px) {
    width: 70%;
  }
`

const Text = styled.p`
  grid-area: Text;
  align-self: flex-start;
  line-height: 2em;
  text-align: center;
  font: normal 400 1.2em Merriweather;
  margin-top: 0;
  padding: 0 1em;
  padding-top: 1.3em;

  @media (max-width: 400px) {
    font-size: 1.6em;
    padding-top: 0;
    width: 80%;
    align-self: center;
    margin: 0;
  }
`

const Pic = styled.img`
  grid-area: Pic;
  height: 70%;
  align-self: center;
  border: 2px solid white;
  border-radius: 50%;

  @media (max-width: 400px) {
    display: none;
  }
`

class Speciality extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef}>
        <Container>
          <Title>This Month's Special</Title>
          <Icon src={'./Images/avocado.svg'} />
          <Header>Open-faced Avocado & Sweet Potato Tacos</Header>
          <Text>Fresh chunks of avocado and caramelized sweet potatoes on a whole wheat tortilla, featuring crisp red onions, with just a hint of tangy feta cheese.
We've balanced the sweet and salty softness with our fresh and crunchy red onion for a whole new taste experience!</Text>
          <Icon2 src={'./Images/onion.svg'} />
          <Pic src={'./Images/spec.jpg'} />
        </Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Speciality innerRef={ref} {...props} />); 
