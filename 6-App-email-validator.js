import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),

            textErrors: {email: '',},

            email: null,
            emailValid: true,

            formValid: true,
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

    fieldHandler(event){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.setState( {[fieldName]: fieldValue} , () => { this.validateField(fieldName, fieldValue) });
    }

    validateField(fieldName, fieldValue) {
        let validationTextErrors = this.state.textErrors;
        let emailValid = this.state.emailValid;

        switch(fieldName) {
            case 'email':
                emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                validationTextErrors.email = !emailValid ? `is invalid` : null;
                break;
            default:
                break;
        }

        this.setState({
            textErrors: validationTextErrors,
            emailValid: null !== emailValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: Boolean(this.state.emailValid) });
    }

    render() {
        return (
            <div className="shadow-sm p-3 mb-5 bg-white rounded">

                <div className="card">
                    <h4 className='card-header'>{this.state.email} <span className="badge badge-primary">{this.state.date.toLocaleTimeString()}</span></h4>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>
                                    <h5 style={!this.state.emailValid ? {'color': 'red'} : null}>
                                        Email {!this.state.emailValid && (
                                        <span className={'ml-2 badge badge-secondary'}
                                              style={{'background': 'red'}}
                                        >{this.state.textErrors.email}</span>)
                                    }
                                    </h5>
                                </label>
                                <input type={'email'}
                                       name={'email'}
                                       onChange={this.fieldHandler.bind(this)}
                                       defaultValue={this.state.email}
                                       className={!this.state.emailValid ? 'is-invalid form-control' : 'form-control'}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }

}

export default App;
