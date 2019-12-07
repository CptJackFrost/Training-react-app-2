import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    render(){
        return(
            <div className = "wrapper">
                <Clock />
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
