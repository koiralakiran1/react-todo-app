import React from 'react';

export const ToDoListItem = (props) =>
  (
    <li className="list-group-item todo_list_item" key={'item_' + props.myKey} id={props.myKey}>
      <div className='list_item_display_text'>{props.value}</div>
      <div className='list_btn_group'>
        <button className="btn btn-success" onClick={props.onDone}>&#10004;</button>
        <button className="btn btn-primary" onClick={props.onEdit}>&#128393;</button>
        <button className="btn btn-danger" onClick={props.onDelete}>&#128502;</button>
      </div>
    </li>
  );

