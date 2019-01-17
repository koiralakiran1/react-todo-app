import React from 'react';

/**
 *
 * @param {*} props
 */
export const ToDoListItem = (props) => {
  if(props.item.editingStatus) {
    return (
      <li
        className={props.item.doneStatus ? 'done_task_item list-group-item todo_list_item' : 'list-group-item todo_list_item'}
        key={'item_' + props.myKey}>
        <form
          className='list_item_edit_form'
          onSubmit={ (e) => props.onEditSubmit(props.item.id, e) }>
          <input
            type='text'
            onChange={ (e) => props.onEditingChange(props.item.id, e) }
            value={props.item.todoContent} />
          <p><em>Press Enter To Save</em></p>
        </form>
      </li>
    );
  } else {
    return (
      <li
        className={props.item.doneStatus ? 'done_task_item list-group-item todo_list_item' : 'list-group-item todo_list_item'}
        key={'item_' + props.myKey}
        id={props.item.id}>
        <div className='list_item_display_text'>
          <input
            type='checkbox'
            checked={props.item.doneStatus ? 'checked' : ''}
            onChange={ (e) => props.handleCheckBoxChange(props.item.id, e)}
            id={'input_' + props.myKey} />
          <label
            className={props.item.doneStatus ? 'done_task_text' : ''}>{props.item.todoContent}</label>
        </div>
        <div className='list_btn_group'>
          <button className="btn btn-primary" onClick={ (e) => props.onEdit(props.item.id, e) }><i className="fas fa-pen-nib"></i></button>
          <button className="btn btn-danger" onClick={ (e) => props.onDelete(props.item.id, e) }><i className="fas fa-times"></i></button>
        </div>
      </li>
    );
  }

};
