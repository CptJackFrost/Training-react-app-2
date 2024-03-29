import React, {Component} from 'react';
import './App.css';


function ShowBanner(props){
  if (props.time > 45) {
    return(
      <div className="rest_block"> Отдых </div>
    )
  }
  else {
    return(
      <div className="work_block"> Время работать! </div>
    )
  }
}

class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(   
      <div>
        <ShowBanner time={this.state.date.getSeconds()} />   
        <h1> Текущее время {this.state.date.toLocaleTimeString()} </h1>  
      </div>
    )
  }

}

export default Clock;
