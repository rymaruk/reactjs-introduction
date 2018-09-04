import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            age: 21,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
        console.log('Component an unmounted!')
    }

    componentWillUpdate(){
        // console.log('Now will be TICK!');
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState);
    }

    buttonHandler(event){
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>My name is, {this.props.name}! I'm {this.state.age} years old!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <input type={'number'} onChange={this.buttonHandler.bind(this)} />
            </div>
        );
    }

}

export default App;
