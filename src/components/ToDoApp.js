import React, { Component } from 'react';
import '../App.css';
import { ToDoList } from './ToDoList';
import { Input } from './Input';
import { Navigation } from './Navigation';

export class ToDoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      todoList: [],
      currentList: 0 // 0: all, 1: completed, 2: remaining
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDone = this.handleOnDone.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.displayAllTodos = this.displayAllTodos.bind(this);
    this.displayCompletedTodos = this.displayCompletedTodos.bind(this);
    this.displayRemainingTodos = this.displayRemainingTodos.bind(this);
    // this.displayTodo = this.displayTodo.bind(this);
  }
  displayAllTodos(e) {
    e.preventDefault();
    this.setState({
      currentList: 0
    });
  }
  displayCompletedTodos(e) {
    e.preventDefault();
    this.setState({
      currentList: 1
    });
  }
  displayRemainingTodos(e) {
    e.preventDefault();
    this.setState({
      currentList: 2
    });
  }

  // displayTodo(i) {
  //   console.log('dtd');
  //   switch(i) {
  //     case 0:
  //       return this.displayAllTodos;
  //     case 1:
  //       return this.displayCompletedTodos;
  //     case 2:
  //       return this.displayRemainingTodos;
  //     default:
  //       return this.displayAllTodos;
  //   }
  // }

  handleOnChange(e) {
    this.setState({
      currentText: e.target.value
    });
  }

  handleOnDelete(e) {
    // console.log('delete');
    e.preventDefault();
    const deleteId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(...this.state.todoList);
    // const deleteObj = Object.assign({}, newToDoList.filter((item) => { return item.id === deleteId; }));
    newToDoList.splice(newToDoList.findIndex((item) => {return item.id === deleteId; }), 1);

    this.setState({
      todoList: newToDoList
    });

  }
  handleOnDone(e) {

    const doneId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const doneObj = Object.assign({}, newToDoList.filter((item) => { return item.id === doneId; })[0]);
    doneObj.doneStatus = !doneObj.doneStatus;
    newToDoList[newToDoList.findIndex((item) => {return item.id === doneId; })] = doneObj;

    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }
  handleOnEdit(e) {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => { return item.id === editingId; })[0]);
    editingObj.editingStatus = !editingObj.editingStatus;
    newToDoList[newToDoList.findIndex((item) => {return item.id === editingId; })] = editingObj;

    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const submittedText = this.state.currentText;
    const newToDoObj = {
      todoContent: submittedText,
      doneStatus: false,
      editingStatus: false,
      id: Date.now().toString()
    };
    const newToDoList = [newToDoObj, ...this.state.todoList];
    this.setState({
      todoList: newToDoList,
      currentText: ''
    });
  }

  handleCheckBoxChange(e) {
    this.handleOnDone(e);
  }

  handleEditChange(e) {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => { return item.id === editingId; })[0]);
    editingObj.todoContent = e.target.value;
    newToDoList[newToDoList.findIndex((item) => { return item.id === editingId; })] = editingObj;
    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }

  onEditSubmit(e) {
    e.preventDefault();
    const editingId = e.target.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => { return item.id === editingId; })[0]);

    const formChilds = e.target.childNodes;
    editingObj.todoContent = formChilds[0].value;
    editingObj.editingStatus = false;
    newToDoList[newToDoList.findIndex((item) => { return item.id === editingId; })] = editingObj;

    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }

  filterDisplayList() {
    switch(this.state.currentList) {
      case 0: // all
        return this.state.todoList;
      case 1: // completed
        return this.state.todoList.filter((todoItem) => {
          return todoItem.doneStatus;
        });
      case 2: // remaining
        return this.state.todoList.filter((todoItem) => {
          return !todoItem.doneStatus;
        });
      default:
        return this.state.todoList;
    }
  }

  render() {

    return (
      <>
        <Navigation
          items={['All', 'Completed', 'Remaining']}
          currentList={this.state.currentList}
          displayAllTodos={this.displayAllTodos}
          displayCompletedTodos={this.displayCompletedTodos}
          displayRemainingTodos={this.displayRemainingTodos} />

        <Input
          value={this.state.currentText}
          type='text'
          placeholder="Add New TODO"
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}/>

        <ToDoList
          handleCheckBoxChange={this.handleCheckBoxChange}
          items={this.filterDisplayList()}
          onDelete={this.handleOnDelete}
          onDone={this.handleOnDone}
          onEdit={this.handleOnEdit}
          onEditingChange={this.handleEditChange}
          onEditSubmit={this.onEditSubmit} />
      </>
    );
  }

}

// export default ToDoApp;
