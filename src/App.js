import React, { Component } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { Input } from './components/Input';
import { Navigation } from './components/Navigation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      allToDoArray: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const newToDO = this.state.allToDoArray;
    newToDO.push(this.state.currentTodo);

    this.setState({
      allToDoArray: newToDO,
      currentTodo: ''
    });
  }

  render() {
    return (
      <div className="App">
        {/* <button className='btn btn-secondary'>Hello</button> */}
        <Navigation items={['All', 'Completed', 'Remaining']} />
        <Input value={this.state.currentTodo} type='text' placeholder="Add New TODO" onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}/>
        <ToDoList items={this.state.allToDoArray} />
      </div>
    );
  }

}

export default App;
