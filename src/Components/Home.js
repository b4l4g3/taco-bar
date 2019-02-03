import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.div`
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
`

const MiddleTitle = styled.h2`
  font: italic 600 2em Merriweather;
  grid-area: MiddleTitle;
  border-bottom: 2px solid white;
`

const LowerTitle = styled.h3`
  font: italic 400 1.5em Merriweather;
  grid-area: LowerTitle;
  margin: 0;
`

const Button = styled.a`
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

  &:hover {
    background-color: #ffffffba;
  }
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={'./Images/dante.svg'} />
        <MainTitle>Dante's Taco Bar</MainTitle>
        <MiddleTitle>the best tacos in Bradford</MiddleTitle>
        <LowerTitle>Enjoy the most delicious flavors of Mexico!</LowerTitle>
        <Button href={'https://www.ubereats.com/en-GB/london/food-delivery/dante-taco-bar/'}>Order</Button>
        <Nav />
      </Wrapper>
    )
  }
}

export default Home
