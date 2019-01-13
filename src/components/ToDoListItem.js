import React from 'react';

export const ToDoListItem = (props) =>
  (
    <li className={props.value.doneStatus ? 'done_task_item list-group-item todo_list_item' : 'list-group-item todo_list_item'} key={'item_' + props.myKey} id={props.myKey}>
      <div className='list_item_display_text'>
        <input type='checkbox' onChange={props.handleCheckBoxChange} id={'input_' + props.myKey} value={'input_' + props.myKey} name={'input_' + props.myKey}  />
        <label className={props.value.doneStatus ? 'done_task_text' : ''} htmlFor={'input_' + props.myKey}>{props.value.todoContent}</label>
      </div>
      <div className='list_btn_group'>
        <button className="btn btn-primary" onClick={props.onEdit}>&#128393;</button>
        <button className="btn btn-danger" onClick={props.onDelete}>&#128502;</button>
      </div>
    </li>
  );

