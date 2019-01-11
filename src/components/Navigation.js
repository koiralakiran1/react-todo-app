import React from 'react';

export const Navigation = (props) =>
  (
    <ul className="nav nav-fill nav-tabs">
      {props.items.map((item, i) =>
        (
          <li key={'index_' + i} className="nav-item">
            <a className="nav-link" href="/">{item}</a>
          </li>
        )
      )}
    </ul>
  );
