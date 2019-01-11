import React from 'react';

export const ToDoList = (props) =>
  (
    <ul className="list-group">
      {props.items.map((item, i) => <li key={'index_' + i} className="list-group-item todo_list_item">{item}</li>)}
    </ul>
  );

