import React, { Component } from 'react';
import styled from 'styled-components';
import './Hamburger.css';
import { scroll } from '../helper.js'

const Wrapper = styled.div`
    z-index: 50;
`

const NavItem = styled.a`

`

export class Hamburger extends Component {
    render() {
        return (
            <Wrapper>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <NavItem onClick={() => scroll(this.props.getRef.homeComp)} ><li>Home</li></NavItem>
                            <NavItem onClick={() => scroll(this.props.getRef.specComp)} ><li>Menu</li></NavItem>
                            <NavItem onClick={() => scroll(this.props.getRef.menuComp)} ><li>Speciality</li></NavItem>
                            <NavItem ><li>Career</li></NavItem>
                            <NavItem ><li>Location</li></NavItem>
                        </ul>
                    </div>
                </nav>
            </Wrapper>
        )
    }
}

export default Hamburger
