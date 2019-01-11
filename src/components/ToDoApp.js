import React, { Component } from 'react';
import '../App.css';
import { ToDoList } from './ToDoList';
import { Input } from './Input';
import { Navigation } from './Navigation';

export class ToDoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      allToDoArray: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDone = this.handleOnDone.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      currentTodo: e.target.value
    });
  }

  handleOnDelete(e) {
    // console.log('delete');
    e.preventDefault();
    const deleteId = e.target.parentNode.parentNode.getAttribute('id');
    // console.log(deleteId);
    let newTodoArray = [].concat(...this.state.allToDoArray);
    newTodoArray.splice(deleteId, 1);

    this.setState({
      allToDoArray: newTodoArray
    });

  }
  handleOnDone(e) {
    // console.log('done');
  }
  handleOnEdit(e) {
    // console.log('edit');
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const currentText = this.state.currentTodo;
    const newToDO = [currentText, ...this.state.allToDoArray];
    this.setState({
      allToDoArray: newToDO,
      currentTodo: ''
    });
  }

  render() {
    return (
      <>
        <Navigation items={['All', 'Completed', 'Remaining']} />
        <Input value={this.state.currentTodo} type='text' placeholder="Add New TODO" onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}/>
        <ToDoList
          items={this.state.allToDoArray}
          onDelete={this.handleOnDelete}
          onDone={this.handleOnDone}
          onEdit={this.handleOnEdit} />
      </>
    );
  }

}

// export default ToDoApp;
