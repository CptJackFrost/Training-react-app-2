import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ReactComponent } from '*.svg';

class App extends ReactComponent {
    render(){
        <div className = "wrapper">
            
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
