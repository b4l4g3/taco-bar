import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    grid-area: Nav;
    z-index: 1;
    height: 10em;
    justify-content: center;
    align-items: center;
    font: normal 600 1em monospace;
`

const NavItem = styled.a`
    margin: 1.5em;
    text-decoration: none;
    text-align: center;

    &:hover {
        opacity: 0.7;
    }
`

const Logo = styled.img`
    width: 4em;
`

const NavText = styled.p`
    color: white;
`

class Nav extends Component {
    render() {
        return (
            <Wrapper>
                <NavItem href={'https://www.google.com'}><Logo src={'./Images/specialities.svg'} alt={'specialities'} />
                <NavText>Speciality</NavText></NavItem>
                <NavItem href={'https://www.google.com'}><Logo src={'./Images/menu.svg'} alt={'menu'} />
                <NavText>Menu</NavText></NavItem>
                <NavItem href={'https://www.google.com'}><Logo src={'./Images/career.svg'} alt={'career'} />
                <NavText>Career</NavText></NavItem>
                <NavItem href={'https://www.google.com'}><Logo src={'./Images/location.svg'} alt={'location'} />
                <NavText>Location</NavText></NavItem>
            </Wrapper>
        )
    }
}

export default Nav
