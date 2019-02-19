import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
`

const Block = styled.div`
  margin: 25px;
  background-color: #fff;
  width: 85%;
  background-color: #131313;
  color: white;
  padding: 2em;
  margin: 2em auto;
`

const Title = styled.p`
  text-align: center;
  margin: 0;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-between;
`

const ItemName = styled.p`

`

const Price = styled.p`

`

class Menu extends Component {
  render() {
    const menuData = new Map(Object.entries({ "tacos": [{ "name": "Beef Taco", "price": "7.5£" }, { "name": "Chicken Taco", "price": "7£" }, { "name": "Tuna Taco", "price": "8.5£" }], "sides": [{ "name": "Salsa Roja", "price": "3£" }, { "name": "Rice & Beans", "price": "4£" }, { "name": "Tortilla Chips", "price": "3.5£" }], "desserts": [{ "name": "Churro", "price": "4.5£" }, { "name": "Sopaipilla", "price": "4£" }, { "name": "Pastelitos De Boda", "price": "5£" }], "drinks": [{ "name": "Mexican Coke 12oz", "price": "3£" }, { "name": "Tequila 1.5oz", "price": "4£" }, { "name": "Corona 12oz", "price": "3.5£" }] }));
    const menu = [];
    menuData.forEach((key, value) => {

      const items = []
      key.forEach((item) => {
        const comp = <Item key={item.name}>
          <ItemName>{item.name}</ItemName>
          <Price>{item.price}</Price>
        </Item>
        items.push(comp);
      })
      const comp = <Block key={value}>
        <Title>{value}</Title>
        {items}
      </Block>
      menu.push(comp);
    })
    return (
      <Wrapper ref={this.props.innerRef}>
        {menu}
      </Wrapper>
    )
  }
}

export default React.forwardRef((props, ref) => <Menu innerRef={ref} {...props}/>); 
