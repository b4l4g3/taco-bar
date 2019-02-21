import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('./Images/specBG2.jpg');
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  background-color: #ffffffdb;
  height: 85%;
  width: 80%;
`

const Title = styled.h1`
  text-align: center;
  font: normal 600 2.3em Merriweather;
  color: black;
`

class Speciality extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef}>
        <Container>
          <Title>This Month's Special</Title>
        </Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Speciality innerRef={ref} {...props}/>); 
