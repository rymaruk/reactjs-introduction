import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'container'}>

                <div className="row">

                    <div className="col-12">
                        <App name={'Time'} />
                    </div>

                </div>

            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
