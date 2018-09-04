import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
            <div>
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={this.state.statusSomeChecked}
                        onChange={this.handlerToggle.bind(this)}
                    />
                    Trigger show
                </label>
                {this.state.statusSomeChecked && <App name={'User name'} /> }
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
