import './App.css';
import React, { Component } from 'react';
import { ToDoApp } from './components/ToDoApp';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div className='App container'>
        <ToDoApp />
      </div>
    );
  }

}

export default App;
