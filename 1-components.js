import React, { Component } from 'react';

// function App(props) {
//     // props = {name: 'User'}
//     return <h1>Hello, {props.name}</h1>;
// }

// const App = props => <h1>Hello, {props.name}</h1>;

class App extends Component {
    constructor() {
        super(); // super(props);
        this.state = { age: 21 };
    }
    // this.props = {name: 'User'}
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

export default App;
