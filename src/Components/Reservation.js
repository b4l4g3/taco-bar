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

    @media (max-width: 400px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
`

const Title = styled.h1`
    text-align: center;
    margin: 0.75em;
    font: normal 600 2em Merriweather;
`

const Header = styled.h2`
    text-align: center;
    font: italic 600 1.2em Merriweather;
    color: #9d1e00;
    margin-bottom: 2.2em;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;

    @media (max-width: 400px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
`

const Label = styled.label`
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

    &[type="submit"] {
        background-color: #515151;
        width: 10.5em;
        margin-top: 10%;
        height: 2.3em;

        &:hover {
            background-color: gray;
          }
      }
`

export class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            persons: ''
        }

        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handlePersons = this.handlePersons.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDate(event) {
        this.setState({
            date: event.target.value
        })
    }

    handleTime(event) {
         this.setState({
            time: event.target.value
        })
    }

    handlePersons(event) {
        this.setState({
            persons: event.target.value
        })
    }

    handleSubmit(event) {
    alert(`Tables are reserved for ${this.state.persons} people on ${this.state.date} ${this.state.time}`);
    event.preventDefault();
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
            <Wrapper  ref={this.props.innerRef}>
                <Container>
                    <Title>Reservation</Title>
                    <Header>
                    We look forward to seeing you either for the first time or back to enjoy our great food and amazing cocktails!
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Label>
                            <Icon src={'./Images/calendar.svg'} />
                            <Input style={styles.date} type="date" name="date" value={this.state.date} onChange={this.handleDate} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/clock.svg'} />
                            <Input style={styles.time} type="time" value={this.state.time} onChange={this.handleTime} />
                        </Label>
                        <Label>
                            <Icon src={'./Images/group.svg'} />
                            <Input style={styles.persons} type="number" name="persons" min="1" max="20" value={this.state.persons} onChange={this.handlePersons} />
                        </Label>
                            <Input style={styles.submit} type="submit" value="Submit" />
                        
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

export default  React.forwardRef((props, ref) => <Reservation innerRef={ref} {...props}/>);
