import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  scroll-snap-align: center;
  background-image: url('./Images/speciality.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
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

`

class Speciality extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef}>
        <Container></Container>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Speciality innerRef={ref} {...props}/>); 
