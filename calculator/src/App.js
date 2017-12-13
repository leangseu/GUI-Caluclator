import React, {Component} from 'react';
// import axios from 'axios'
import './App.css';
import EquationForm from './EquationForm';

class App extends Component {
  render() {
    return (<div className="App" id='App'>
      <h1>Advance Calculator</h1>
      <EquationForm />
    </div>);
  }
}

export default App;
