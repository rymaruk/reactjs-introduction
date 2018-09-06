import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {validate} from './validate';

const InputField = ( { input, label, type, meta: { touched, error, warning },} ) => {
    return (
        <div>
            <div className="form-group">
                <label>
                    <h5 style={touched &&  error ? {'color': 'red'} : null}>
                        {label}
                        {touched &&  error &&
                        <div className="ml-2 badge badge-secondary" style={{'background': 'red'}}>
                            {error}
                        </div>}
                    </h5>
                </label>
                <input className={error && touched ? 'is-invalid form-control' : 'form-control'} {...input} type={type} />
            </div>
        </div>
    );
};


let SomeForm = props => {
    console.log(props);
    const { handleSubmit, valid } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field type="text" name="email" component={InputField} label="Email" />
            <Field type="text" name="phone" component={InputField} label="Phone" />
            <button type="submit" className={'btn btn-success'} disabled={!valid}>Send</button>
        </form>
    );
};

SomeForm = reduxForm({form: 'someForm', validate,})(SomeForm);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}), 1000);
        this.setState({'email' : this.props.email})
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handlesSubmit = values => {
        console.log(`Email: ${values.email}`);
        console.log(`Phone: ${values.phone}`);
    };

    render() {
        return (
            <div className="shadow-sm p-3 mb-5 bg-white rounded">

                <div className="card">
                    <h4 className='card-header'>Form <span className="badge badge-primary">{this.state.date.toLocaleTimeString()}</span></h4>
                    <div className="card-body">
                        <SomeForm onSubmit={this.handlesSubmit} />
                    </div>
                </div>

            </div>
        );
    }

}

export default App;
