import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = (props) =>
  (
    <ul className="list-group">
      {props.items.map((item, i) =>
        <ToDoListItem
          value={item}
          key={i}
          myKey={i}
          onDelete={props.onDelete}
          onDone={props.onDone}
          onEdit={props.onEdit} />
      )}
    </ul>
  );

