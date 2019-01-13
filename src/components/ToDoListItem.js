import React from 'react';

export const ToDoListItem = (props) => {
  if(props.value.editingStatus) {
    return (
      <li className={props.value.doneStatus ? 'done_task_item list-group-item todo_list_item' : 'list-group-item todo_list_item'} key={'item_' + props.myKey} id={props.myKey}>
        <form className='list_item_edit_form' onSubmit={props.onEditSubmit}>
          <input type='text' id={'input_' + props.myKey} onChange={props.onEditingChange} value={props.value.todoContent} name={'input_' + props.myKey}  />
          <p><em>Press Enter To Save</em></p>
        </form>
      </li>
    );
  } else {
    return (
      <li className={props.value.doneStatus ? 'done_task_item list-group-item todo_list_item' : 'list-group-item todo_list_item'} key={'item_' + props.myKey} id={props.myKey}>
        <div className='list_item_display_text'>
          <input type='checkbox' checked={props.value.doneStatus ? 'checked' : ''} onChange={props.handleCheckBoxChange} id={'input_' + props.myKey} value={'input_' + props.myKey} name={'input_' + props.myKey}  />
          <label className={props.value.doneStatus ? 'done_task_text' : ''} htmlFor={'input_' + props.myKey}>{props.value.todoContent}</label>
        </div>
        <div className='list_btn_group'>
          <button className="btn btn-primary" onClick={props.onEdit}>&#128393;</button>
          <button className="btn btn-danger" onClick={props.onDelete}>&#128502;</button>
        </div>
      </li>
    );
  }


};
