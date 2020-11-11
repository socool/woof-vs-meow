import React from 'react';
import './App.css';
import Dog from './Dog'
import Cat from './Cat'
import Winner from './Winner'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      round: 1,
      catScore: 0,
      dogScore: 0,
    };
    this.dogRef = React.createRef();
    this.catRef = React.createRef();
  }

  handleWin = (type = 'dog') =>{
    if(type === "cat"){
      this.setState((state)=>({
        catScore: state.catScore + 1,
        round: state.round + 1,
      }));
    }else{
      this.setState((state)=>({
        dogScore: state.dogScore +1,
        round: state.round +1,
      }));
    }
    this.dogRef.current.fetchImg();
    this.catRef.current.fetchImg();
  }


  render() {
    let content = (
      <>
        <div className="header">
          <h1>Choose Your Fighter!</h1>
          <h1>Round {this.state.round}</h1>
        </div>
        <div className="fighters">
          <Dog ref={this.dogRef} win={this.handleWin}/>
          <Cat ref={this.catRef} win={this.handleWin}/>
        </div>
      </>
    );
    if(this.state.round === 4){
      let winner = "dog";
      if(this.state.catScore > this.state.dogScore){
        winner = "cat";
      }
      content = <Winner winner={winner}/>;
    }
    return <div className="app">{content}</div>
  }
}

export default App;
