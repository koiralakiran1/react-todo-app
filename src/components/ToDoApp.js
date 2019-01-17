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
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnDelete = (id, e) => {
    e.preventDefault();
    const newToDoList = [...this.state.todoList].filter( item => item.id !== id);

    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Handles the checbox checked/unchecked states.
   *
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnDone = (id, e) => {
    // e.preventDefault();

    const newToDoList = this.state.todoList.map( (item) => {
      if(item.id === id) {
        return { ...item, doneStatus: !item.doneStatus };
      }

      return { ...item }; // Needs spread operator?
    });

    this.setState({
      todoList: newToDoList
    });
  }

  /**
   * Toggles the edit status when edit button is clicked.
   *
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleOnEdit = (id, e) => {

    e.preventDefault();
    const newToDoList = this.state.todoList.map( (item) => {
      if(item.id === id) {
        return { ...item, editingStatus: !item.editingStatus };
      }

      return { ...item };
    });

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
    const newToDoList = [ ...this.state.todoList, newToDoObj ];

    this.setState({
      todoList: newToDoList,
      currentText: ''
    });
  }

  /**
   * Handles the checbox checked/unchecked states. Passes the event 'e' to handleOnDone function.
   *
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleCheckBoxChange = (id, e) => {
    this.handleOnDone(id, e);
  }

  /**
   * Handles changing values in the edit input field when in editStatus is true.
   *
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  handleEditChange = (id, e) => {
    e.preventDefault();

    const newToDoList = this.state.todoList.map( (item) => {
      if(item.id === id) {
        return { ...item, todoContent: e.target.value };
      }

      return { ...item };
    });

    this.setState({
      todoList: newToDoList
    });
  }


  /**
   * Handles setting the todo item's new value when submitted on edit input field.
   *
   * @param {String} id
   * @param {Event} e
   * @memberof ToDoApp
   */
  onEditSubmit = (id, e) => {

    e.preventDefault();
    const newToDoList = this.state.todoList.map( (item) => {
      if(item.id === id) {
        return { ...item, todoContent: e.target.childNodes[0].value, editingStatus: !item.editingStatus }; // Accessing DOM ??
      }

      return { ...item };
    });

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
        return this.state.todoList.filter( todoItem => todoItem.doneStatus );
      case TABS.remaining:
        return this.state.todoList.filter( todoItem => !todoItem.doneStatus );
      default:
        return this.state.todoList;
    }
  }

  /**
   * Handles changing currentList's value when tabs on the navigation are clicked.
   *
   * @param {Event} e Value of pressed tab (all, completed, remaining).
   * @param {Tab} tab
   * @memberof ToDoApp
   */
  setCurrentTab = (e, tab) => {
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
