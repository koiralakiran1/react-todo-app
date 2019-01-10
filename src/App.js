import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <button className='btn btn-secondary'>Hello</button> */}
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link disabled" href="#">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Completed</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Remaining</a>
          </li>
        </ul>
        <div className="add_item_bar form-group">
          <input type="text" className="form-control" placeholder="Enter new TODO item" />
        </div>
        <ul className="list-group">
          <li className="list-group-item">Something</li>
          <li className="list-group-item">Something else</li>
          <li className="list-group-item">Something something else</li>
        </ul>
      </div>
    );
  }

}

export default App;
