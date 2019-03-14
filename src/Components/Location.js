import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`

export class Location extends Component {
  render() {
    return (
      <Wrapper ref={this.props.innerRef} >
        
      </Wrapper>
    )
  }
}

export default  React.forwardRef((props, ref) => <Location innerRef={ref} {...props}/>);
