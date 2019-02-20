import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './Components/Home';
import Speciality from './Components/Speciality';
import Menu from './Components/Menu';

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
      menuComp: React.createRef(),
      specComp: React.createRef()
    }
  }


  componentDidMount() {
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Home  getRef={this.state} />
        <Menu ref={this.state.menuComp} />
        <Speciality ref={this.state.specComp} />
      </Wrapper>
    );
  }
}

export default App;