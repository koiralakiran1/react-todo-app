import './App.css';
import React, { Component } from 'react';
import { ToDoApp } from './components/ToDoApp';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <ToDoApp />
      </div>
    );
  }

}

export default App;
