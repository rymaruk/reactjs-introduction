import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
        console.log('An unmounted!')
    }

    componentWillUpdate(){
        // console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState);
    }

    render() {
        return (
            <div className="shadow-sm p-3 mb-5 bg-white rounded">

                <div className="card">
                    <h4 className='card-header'><span className="badge badge-primary">{this.state.date.toLocaleTimeString()}</span></h4>
                    <div className="card-body"></div>
                </div>

            </div>
        );
    }

}

export default App;
