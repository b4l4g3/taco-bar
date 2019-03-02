import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('./Images/reservation.jpg');
    background-repeat: repeat;
    background-position: center center;
    background-size: cover;
    color: #000;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    margin: 2em auto;
    background-color: #ffffffcf;
    border-radius: 5px;
`

const Title = styled.h1`
    text-align: center;
    margin: 0.75em;
    font: normal 600 2em Merriweather;
`

const Header = styled.h2`
    text-align: center;
    font: italic 600 1em Merriweather;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Label = styled.label`

`

const Icon = styled.img`
    width: 2.6em;
`

const Input = styled.input`

`

export class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <Title>Reservation</Title>
                    <Header>
                        WE LOOK FORWARD TO SEEING YOU EITHER FOR THE FIRST TIME OR BACK TO ENJOY OUR GREAT FOOD AND AMAZING COCKTAILS!</Header>
                    <Form>
                        <Label>
                            <Icon src={'./Images/calendar.svg'} />
                            <Input type="date" name="date" value={this.state.date} onChange={this.handleDate} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/clock.svg'} />
                            <Input type="time" name="time" value={this.state.time} onChange={this.handleTime} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/group.svg'} />
                            <Input type="number" name="persons" value={this.state.persons} onChange={this.handlePersons} />
                        </Label>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

export default Reservation
