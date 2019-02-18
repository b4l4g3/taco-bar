import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: gray;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
`

class Tacos extends Component {
  render() {
    return (
      <Wrapper>
        <p>asd</p>
      </Wrapper>
    )
  }
}

export default Tacos
