import React, { Component } from 'react';
import styled from 'styled-components';
import './Hamburger.css';

const Wrapper = styled.div`
    
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
                            <a ><li>Home</li></a>
                            <a ><li>Speciality</li></a>
                            <a ><li>Menu</li></a>
                            <a ><li>Career</li></a>
                            <a ><li>Location</li></a>
                        </ul>
                    </div>
                </nav>
            </Wrapper>
        )
    }
}

export default Hamburger
