import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    height: 90%;
    width: 50%;
    background-color: #ffffffcf;
    border-radius: 5px;
    padding: 0.5em 7.5em;
`

const Title = styled.h1`
    text-align: center;
    margin: 0.75em;
    font: normal 600 2em Merriweather;
`

const Header = styled.h2`
    text-align: center;
    font: italic 600 1em Merriweather;
    color: #9d1e00;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 43%;
`

const Label = styled.label`
    width: 400px;
`

const Icon = styled.img`
    width: 2.6em;
    margin-right: 1em;
`

const Input = styled.input`
    border: none;
    background-color: gray;
    border-radius: 3px;
    padding: 5px;
    font: normal bold 1em Arial;
    color: white;
`

export class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const styles = {
            date: {
                width: '10.5em'
            },
            time: {
                width: '8em'
            },
            persons: {
                width: '4em'
            }
        }
        return (
            <Wrapper>
                <Container>
                    <Title>Reservation</Title>
                    <Header>
                        WE LOOK FORWARD TO SEEING YOU EITHER FOR THE FIRST TIME OR BACK TO ENJOY OUR GREAT FOOD AND AMAZING COCKTAILS!</Header>
                    <Form>
                        <Label>
                            <Icon src={'./Images/calendar.svg'} />
                            <Input style={styles.date} type="date" name="date" value={this.state.date} onChange={this.handleDate} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/clock.svg'} />
                            <Input style={styles.time} type="time" name="time" value={this.state.time} onChange={this.handleTime} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/group.svg'} />
                            <Input style={styles.persons} type="number" name="persons" value={this.state.persons} onChange={this.handlePersons} />
                        </Label>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

export default Reservation
