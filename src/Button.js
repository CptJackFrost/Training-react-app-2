import React, {Component} from 'react';
import './App.css';

class Button extends React.Component {
    constructor(props){
        super(props)
        this.click = this.click.bind(this)
    }

    click(){
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#F9F5A6FF"
    }

    render(){
        return(
            <button onClick={this.click} className="clicker">
                Изменить дизайн
            </button>
        )
    }
}

export default Button;