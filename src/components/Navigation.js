import React from 'react';

export const Navigation = (props) =>
  (
    <ul className="nav nav-fill nav-tabs">
      {props.items.map((item, i) =>
        (
          <li key={'index_' + i} className='nav-item' id={'nav_item_' + item.toLowerCase()}>
            <a
              onClick={props.displayTodo}
              className={(props.currentList === i) ? 'nav-link active' : 'nav-link'}
              href="/">{item}</a>
          </li>
        )
      )}
    </ul>
  );
