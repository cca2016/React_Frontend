import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
    </Router>
    );
  }
}

export default App;
