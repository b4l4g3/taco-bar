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
`

class Speciality extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef}>
        <p>asd</p>
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Speciality innerRef={ref} {...props}/>); 
