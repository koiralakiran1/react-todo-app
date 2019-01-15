import '../App.css';
import { Input } from './Input';
import { ToDoList } from './ToDoList';
import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { ALL_TODOS, REMAINING_TODOS, COMPLETED_TODOS } from '../constants/constants';

export class ToDoApp extends Component {

  constructor(props) {
    super(props);
    const storageTodos = window.localStorage.getItem('storageTodos');
    const storageTodosArr = storageTodos ? JSON.parse(storageTodos) : [];
    this.state = {
      currentText: '',
      todoList: storageTodosArr,
      currentList: ALL_TODOS
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDone = this.handleOnDone.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.displayTodo = this.displayTodo.bind(this);
  }

  displayTodo(e) {
    e.preventDefault();
    switch(e.target.parentNode.getAttribute('id')) {
      case 'nav_item_all':
        e.preventDefault();
        this.setState({
          currentList: ALL_TODOS
        });
        break;
      case 'nav_item_completed':
        e.preventDefault();
        this.setState({
          currentList: COMPLETED_TODOS
        });
        break;
      case 'nav_item_remaining':
        e.preventDefault();
        this.setState({
          currentList: REMAINING_TODOS
        });
        break;
      default:
        e.preventDefault();
        this.setState({
          currentList: ALL_TODOS
        });
        break;
    }
  }

  handleOnChange(e) {
    this.setState({
      currentText: e.target.value
    });
  }

  handleOnDelete(e) {
    e.preventDefault();
    const deleteId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
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
    this.setState({
      todoList: newToDoList
    });
  }

  handleOnEdit(e) {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => { return item.id === editingId; })[0]);
    editingObj.editingStatus = !editingObj.editingStatus;
    newToDoList[newToDoList.findIndex((item) => {return item.id === editingId; })] = editingObj;
    this.setState({
      todoList: newToDoList
    });
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
    this.setState({
      todoList: newToDoList
    });
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
    this.setState({
      todoList: newToDoList
    });
  }

  filterDisplayList() {
    switch(this.state.currentList) {
      case ALL_TODOS:
        return this.state.todoList;
      case COMPLETED_TODOS:
        return this.state.todoList.filter((todoItem) => {
          return todoItem.doneStatus;
        });
      case REMAINING_TODOS:
        return this.state.todoList.filter((todoItem) => {
          return !todoItem.doneStatus;
        });
      default:
        return this.state.todoList;
    }
  }

  componentWillUnmount() {
    window.localStorage.clear();
    window.localStorage.setItem('storageTodos', JSON.stringify(this.state.todoList));
  }

  render() {

    return (
      <>
        <h1><a href='/'>Todo App</a></h1>

        <Navigation
          items={['All', 'Completed', 'Remaining']}
          currentList={this.state.currentList}
          displayTodo={this.displayTodo} />

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
