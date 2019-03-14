import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Hamburger from './Components/Hamburger';
import Home from './Components/Home';
import Speciality from './Components/Speciality';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather|Oleo+Script');
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  @media (max-width: 390px) {
    font-size: 10px;
  }
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeComp: React.createRef(),
      menuComp: React.createRef(),
      specComp: React.createRef(),
      resComp: React.createRef()
    }
  }


  componentDidMount() {
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Hamburger getRef={this.state} />
        <Home ref={this.state.homeComp} getRef={this.state} />
        <Speciality ref={this.state.specComp} />
        <Menu ref={this.state.menuComp} />
        <Reservation ref={this.state.resComp} />
      </Wrapper>
    );
  }
}

export default App;