
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statusSomeChecked: true
        };

        // this.handlerToggle = this.handlerToggle.bind(this);
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
                        {this.state.statusSomeChecked && <App name={'Contact form'} /> }
                    </div>

                </div>

            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
