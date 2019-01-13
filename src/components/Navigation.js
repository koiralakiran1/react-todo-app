import React from 'react';

export const Navigation = (props) =>
  (
    <ul className="nav nav-fill nav-tabs">
      {props.items.map((item, i) =>
        (
          <li key={'index_' + i} className='nav-item'>
            <a
              onClick={(i === 0) ? props.displayAllTodos : ((i === 1) ? props.displayCompletedTodos : props.displayRemainingTodos)}
              className={(props.currentList === i) ? 'nav-link active' : 'nav-link'}
              href="#">{item}</a>
          </li>
        )
      )}
    </ul>
  );
