import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
  scroll-snap-align: center;
  background-image: url('./Images/bg-img.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-rows: 9.375em auto auto auto auto auto;
  grid-template-columns: auto;
  grid-template-areas:
    "Logo"
    "MainTitle"
    "MiddleTitle"
    "LowerTitle"
    "Button"
    "Nav";
  justify-items: center;
  color: white;

  @media (max-width: 390px) {
    grid-template-rows: none;
    align-content: space-evenly;
  }
`

const Layer = styled.div`
  background-image: url('./Images/layer2.png');
  background-size: cover;
  background-position: bottom;
  height: 100%;
  position: absolute;
  z-index: 5;
  width: 100%;
  bottom: 0;
`


const Logo = styled.img`
  grid-area: Logo;
  height: 6.25em;
  margin-top: 1.875em;
`

const MainTitle = styled.h1`
  font-family: "Oleo Script";
  font-size: 7em;
  margin: 0;
  grid-area: MainTitle;
  -webkit-font-smoothing: antialiased !important;

  @media (max-width: 390px) {
    font-size: 5em;
  }
`

const MiddleTitle = styled.h2`
  font: italic 600 2em Merriweather;
  grid-area: MiddleTitle;
  border-bottom: 2px solid white;
  z-index: 10;
`

const LowerTitle = styled.h3`
  font: italic 400 1.5em Merriweather;
  grid-area: LowerTitle;
  margin: 0;
  z-index: 10;

  @media (max-width: 390px) {
    width: 15em;
    text-align: center;
    line-height: 1.5em;
    margin: -30px 0;
  }
`

const Button = styled.a`
  text-decoration: none;
  grid-area: Button;
  margin: 0.5em;
  height: 2.7em;
  width: 7em;
  border: 0;
  border-radius: 2px;
  background-color: #fff;
  font: normal 600 1.2em sans-serif;
  color: #480400;
  text-align: center;
  padding: 0.7em;
  z-index: 10;

  &:hover {
    background-color: #ffffffba;
  }
  @media (max-width: 390px) {
    font: normal 600 2em sans-serif;
    width: 8em;
  }
`

class Home extends Component {
  render() {
    const getRef = this.props.getRef;
    return (
      <Wrapper>
        <Logo src={'./Images/dante.svg'} />
        <MainTitle>Dante's Taco Bar</MainTitle>
        <MiddleTitle>the best tacos in Bradford</MiddleTitle>
        <LowerTitle>Enjoy the most delicious flavors of Mexico!</LowerTitle>
        <Button target={'_blank'} href={'https://www.ubereats.com/restaurant/signup/dante-taco-bar/'}>Order</Button>
        <Nav getRef={getRef} />
        <Layer />
      </Wrapper>
    )
  }
}

export default Home
