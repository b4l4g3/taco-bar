import React, { Component } from 'react';
import styled from 'styled-components';
import menuData from './menuData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`

const Title = styled.h1`
  text-align: center;
  margin: 10px;
  color: #4f0808
  font: normal 600 2em Merriweather;
`

const Blocks = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  @media (max-width: 390px) {
    grid-template-columns: none;
  }
`

const Block = styled.div`
  width: 85%;
  background-color: #131313;
  border-radius: 3px;
  color: #f6f6f6;
  padding: 2em;
  margin: 1em;

  @media (max-width: 390px) {
    margin: 0.2em;
    padding-top: 1.5em;
  }

  @media (min-width: 1400px) {
    padding: 3em;
  }
`

const Container = styled.div`
  background-color: #4f0808c7;
  border-radius: 4px;
  padding: 0px 10px 10px;
`

const Type = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font: normal 600 1.8em 'Oleo Script';

  @media (max-width: 390px) {
    padding: 0;
  }
`

const Item = styled.div`
  font: italic 600 1.15em Merriweather;
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-between;
  border-bottom: 3.5px dotted white;

  @media (max-width: 390px) {
    border-bottom: 0;
  }
`

const ItemName = styled.p`
  margin: 0;
  padding 0.5em;

`

const Price = styled.p`
  margin: 0;
  padding 0.5em;

`

class Menu extends Component {
  render() {
    const menuMap = new Map(Object.entries(menuData));
    const menu = [];
    menuMap.forEach((key, value) => {

      const items = []
      key.forEach((item) => {
        const comp = <Item key={item.name}>
          <ItemName>{item.name}</ItemName>
          <Price>{item.price}</Price>
        </Item>
        items.push(comp);
      })
      let bgImage;
      switch (value) {
        case 'tacos': 
        bgImage = {
          background: "#6DB3F2 url('./Images/tacos2.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        };
        break;
        case 'sides':
        bgImage = {
          background: "#6DB3F2 url('./Images/sides2.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        };
        break;
        case 'drinks':
        bgImage = {
          background: "#6DB3F2 url('./Images/drinks2.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        };
        break;
        case 'desserts':
        bgImage = {
          background: "#6DB3F2 url('./Images/desserts2.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        };
        break;
        default:
        break;
      }
      const comp = <Block style={bgImage} key={value}>
        <Container>
        <Type>{value}</Type>
        {items}
        </Container>
      </Block>
      menu.push(comp);
    })
    return (
      <Wrapper ref={this.props.innerRef}>
      <Title>Menu</Title>
      <Blocks>{menu}</Blocks>      
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Menu innerRef={ref} {...props}/>); 
