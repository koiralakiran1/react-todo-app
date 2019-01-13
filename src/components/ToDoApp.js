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
      todoList: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDone = this.handleOnDone.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      currentText: e.target.value
    });
  }

  handleOnDelete(e) {
    // console.log('delete');
    e.preventDefault();
    const deleteId = e.target.parentNode.parentNode.getAttribute('id');
    // console.log(deleteId);
    const newToDoList = [].concat(...this.state.todoList);
    newToDoList.splice(deleteId, 1);

    this.setState({
      todoList: newToDoList
    });

  }
  handleOnDone(e) {

    const doneId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const doneObj = Object.assign({}, newToDoList[doneId]);
    doneObj.doneStatus = !doneObj.doneStatus;
    newToDoList[doneId] = doneObj;

    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }
  handleOnEdit(e) {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList[editingId]);
    editingObj.editingStatus = !editingObj.editingStatus;
    newToDoList[editingId] = editingObj;

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
    const editingObj = Object.assign({}, newToDoList[editingId]);
    editingObj.todoContent = e.target.value;
    newToDoList[editingId] = editingObj;
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
    const editingObj = Object.assign({}, newToDoList[editingId]);

    const formChilds = e.target.childNodes;
    editingObj.todoContent = formChilds[0].value;
    editingObj.editingStatus = false;
    newToDoList[editingId] = editingObj;

    // console.log(this.state);
    this.setState({
      todoList: newToDoList
    });

    // setTimeout(()=> console.log(this.state), 1000);
  }

  render() {
    return (
      <>
        <Navigation items={['All', 'Completed', 'Remaining']} />
        <Input value={this.state.currentText} type='text' placeholder="Add New TODO" onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}/>
        <ToDoList
          handleCheckBoxChange={this.handleCheckBoxChange}
          items={this.state.todoList}
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
