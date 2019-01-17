import React from 'react';
import { TABS } from '../constants/constants';

/**
 *
 * @param {*} props
 */
export const Navigation = (props) =>
  (
    <ul className="nav nav-fill nav-tabs">
      <li className='nav-item'>
        <a href='/'
          className={props.currentList === TABS.all ? 'nav-link active' : 'nav-link'}
          onClick={ (e) => props.setCurrentTab(e, TABS.all) }>All</a>
      </li>
      <li className='nav-item'>
        <a href='/'
          className={props.currentList === TABS.completed ? 'nav-link active' : 'nav-link'}
          onClick={ (e) => props.setCurrentTab(e, TABS.completed) }>Completed</a>
      </li>
      <li className='nav-item'>
        <a href='/' className={props.currentList === TABS.remaining ? 'nav-link active' : 'nav-link'}
          onClick={ (e) => props.setCurrentTab(e, TABS.remaining) }>Remaining</a>
      </li>
    </ul>
  );
