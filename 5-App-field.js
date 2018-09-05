import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: '',
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
        this.setState({'email' : this.props.email})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('An unmounted!')
    }

    componentWillUpdate(){
        // console.log('componentWillUpdate!');
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState);
    }

    emailHandler(event){
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div className="shadow-sm p-3 mb-5 bg-white rounded">

                <div className="card">
                    <h4 className='card-header'>{this.state.email} <span className="badge badge-primary">{this.state.date.toLocaleTimeString()}</span></h4>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input type={'email'}
                                   onChange={this.emailHandler.bind(this)}
                                   defaultValue={this.state.email}
                                   className={'form-control'} 
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default App;
