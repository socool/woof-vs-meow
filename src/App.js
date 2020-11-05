import React from 'react';
import './App.css';
import Dog from './Dog'
import Cat from './Cat'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      round: 1,
      catScore: 0,
      dogScore: 0,
    };
  }

  render() {
    return (
    <div className="app"> 
      <Dog/>
      <Cat/>
    </div>
    );
  }
}

export default App;
