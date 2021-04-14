import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';

class App extends Component {
  state = {counter: 0};

  incrementCounter = () => {
    const {counter} = this.state;
    this.setState({counter: counter +1 });
  };
  componentDidMount(){
    setInterval(this.incrementCounter, 1000);
  }
  // {clearInterval(this.setInterval); }}>

  render() {
    return (
    <div className="App">
     <div className="watch"><FontAwesomeIcon icon={faClock} /></div>
     <div className="sec6">{Math.floor(this.state.counter/100000)%10}</div>
     <div className="sec5">{Math.floor(this.state.counter/10000)%10}</div>
     <div className="sec4">{Math.floor(this.state.counter/1000)%10}</div>
     <div className="sec3">{Math.floor(this.state.counter/100)%10}</div>
     <div className="sec2">{Math.floor(this.state.counter/10)%10}</div>
     <div className="sec1">{this.state.counter%10}</div>
     <button className="stopButom" onClick={()=>{ alert('Stoped the counter'); }}>DETENER EL CONTADOR</button>
    </div>
    );
  }
}



export default App;
