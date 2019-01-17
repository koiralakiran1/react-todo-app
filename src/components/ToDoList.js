import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export /**
 *
 *
 * @param {*} props
 */
const ToDoList = (props) =>
  (
    <ul className="list-group">
      {props.items.map((item, i) => {

        return (
          <ToDoListItem
            item={item}
            key={i}
            myKey={i}
            handleCheckBoxChange={props.handleCheckBoxChange}
            onEditingChange={props.onEditingChange}
            onDelete={props.onDelete}
            onDone={props.onDone}
            onEdit={props.onEdit}
            onEditSubmit={props.onEditSubmit} />);

      }
      )}
    </ul>
  );

