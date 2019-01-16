import '../App.css';
import { Input } from './Input';
import { ToDoList } from './ToDoList';
import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { TABS } from '../constants/constants';

/**
 * Containing class component for the app. Renders all other components by passing down its state as props.
 */
export class ToDoApp extends Component {

  /**
   * Constructor for ToDoApp class component.
   *
   * @param   {Object}  props  Props here.
   *
   * @returns  {void} Return here.
   */
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      todoList: [],
      currentList: TABS.all
    };
  }

  /**
   * Handles changing values on 'Add New TODO' input field.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnChange = (e) => {
    this.setState({
      currentText: e.target.value
    });
  }

  /**
   * Handles deleting item from the list when delete button is pressed.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnDelete = (e) => {
    e.preventDefault();
    const deleteId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);

    newToDoList.splice(newToDoList.findIndex((item) => {
      return item.id === deleteId;
    }), 1);
    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Handles the checbox checked/unchecked states.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnDone = (e) => {
    const doneId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const doneObj = Object.assign({}, newToDoList.filter((item) => {
      return item.id === doneId;
    })[0]);

    doneObj.doneStatus = !doneObj.doneStatus;
    newToDoList[newToDoList.findIndex((item) => {
      return item.id === doneId;
    })] = doneObj;
    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Toggles the edit status when edit button is clicked.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnEdit = (e) => {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => {
      return item.id === editingId;
    })[0]);

    editingObj.editingStatus = !editingObj.editingStatus;
    newToDoList[newToDoList.findIndex((item) => {
      return item.id === editingId;
    })] = editingObj;
    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Handles creating new todo when new todo is submitted.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnSubmit = (e) => {
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

  /**
   * Handles the checbox checked/unchecked states. Passes the event 'e' to handleOnDone function.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleCheckBoxChange = (e) => {
    this.handleOnDone(e);
  }

  /**
   * Handles changing values in the edit input field when in editStatus is true.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleEditChange = (e) => {
    const editingId = e.target.parentNode.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => {
      return item.id === editingId;
    })[0]);

    editingObj.todoContent = e.target.value;
    newToDoList[newToDoList.findIndex((item) => {
      return item.id === editingId;
    })] = editingObj;
    this.setState({
      todoList: newToDoList
    });
  }


  /**
   * Handles setting the todo item's new value when submitted on edit input field.
   *
   * @param {Event} e
   * @memberof ToDoApp
   */
  onEditSubmit = (e) => {
    e.preventDefault();
    const editingId = e.target.parentNode.getAttribute('id');
    const newToDoList = [].concat(this.state.todoList);
    const editingObj = Object.assign({}, newToDoList.filter((item) => {
      return item.id === editingId;
    })[0]);
    const formChilds = e.target.childNodes;

    editingObj.todoContent = formChilds[0].value;
    editingObj.editingStatus = false;
    newToDoList[newToDoList.findIndex((item) => {
      return item.id === editingId;
    })] = editingObj;
    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Filters the list to be displayed according to currentList(all,completed, remaining) value.
   *
   * @returns {Array}
   * @memberof ToDoApp
   */
  filterDisplayList = () => {
    switch(this.state.currentList) {
      case TABS.all:
        return this.state.todoList;
      case TABS.completed:
        return this.state.todoList.filter((todoItem) => {
          return todoItem.doneStatus;
        });
      case TABS.remaining:
        return this.state.todoList.filter((todoItem) => {
          return !todoItem.doneStatus;
        });
      default:
        return this.state.todoList;
    }
  }

  /**
   * Handles changing currentList's value when tabs on the navigation are clicked.
   *
   * @param {String} tab Value of pressed tab (all, completed, remaining).
   * @param {Event} e
   * @memberof ToDoApp
   */
  setCurrentTab = (tab, e) => {
    e.preventDefault();
    this.setState({
      currentList: tab
    });
  }

  /**
   * Store the todoList array to local storage on each component update.
   *
   * @memberof ToDoApp
   */
  componentDidUpdate = () => {
    window.localStorage.setItem('storageTodos', JSON.stringify(this.state.todoList));
  }

  /**
   * Gets todoList from local storage and sets the state with that value.
   *
   * @memberof ToDoApp
   */
  componentDidMount = () => {
    const storageTodos = window.localStorage.getItem('storageTodos');
    const storageTodosArr = storageTodos ? JSON.parse(storageTodos) : [];

    window.localStorage.clear();
    this.setState( {
      todoList: storageTodosArr
    });
  }

  /**
   * Renders the ToDoApp.
   *
   * @returns {Fragment}
   * @memberof ToDoApp
   */
  render() {

    return (
      <>
        <h1><a href='/'>Todo App</a></h1>

        <Navigation
          setCurrentTab= {this.setCurrentTab}
          currentList={this.state.currentList} />

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
