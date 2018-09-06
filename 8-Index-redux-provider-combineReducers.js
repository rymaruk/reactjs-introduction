
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReducer = combineReducers({
    form: formReducer,
});
const store = createStore(rootReducer);


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusSomeChecked: true
        };
    }

    handlerToggle(){
        this.setState({statusSomeChecked: !this.state.statusSomeChecked});
    }

    render() {
        return (
            <div className={'container'}>

                <div className="row">

                    <div className="col-12 text-center">
                        <div className="custom-control custom-checkbox">

                            <input type="checkbox"
                                   defaultChecked={this.state.statusSomeChecked}
                                   ref={'fieldSomeChecked'}
                                   onChange={this.handlerToggle.bind(this)}
                                   className="custom-control-input"
                                   id="trigger"
                            />

                            <label className="custom-control-label" htmlFor="trigger">
                                {this.state.statusSomeChecked ? ('Mounted') : ('Unmounted')}
                            </label>

                        </div>
                    </div>

                    <div className="col-12">
                        {this.state.statusSomeChecked && <App email={'contact@gmail.com'} /> }
                    </div>

                </div>

            </div>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
