import React from 'react';

/**
 *
 * @param {*} props
 */
export const ToDoListItem = (props) => {
  if(props.item.editingStatus) {
    return (
      <li
        className={props.item.doneStatus ? 'done_task_item list-group-item' : 'list-group-item'}
        key={'item_' + props.myKey}
        id={props.item.id}>
        <form
          className='row'
          onSubmit={ (e) => props.onEditSubmit(props.item.id, e) }>
          <div className="col col-sm col-md col-lg col-xl no-padding">
            <input
              className='form-control'
              type='text'
              onChange={ (e) => props.onEditingChange(props.item.id, e) }
              value={props.item.todoContent} />
          </div>
          <div className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3'>
            <button className='btn btn-primary width-100'>Submit</button>
          </div>
        </form>
      </li>
    );
  } else {
    return (
      <li
        className={props.item.doneStatus ? 'done_task_item list-group-item' : 'list-group-item'}
        key={'item_' + props.myKey}>
        <div className="row">
          <div className='col-7 col-sm-8 col-md-9 col-lg-9 col-xl-9 align_left'>
            <input
              type='checkbox'
              className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"
              checked={props.item.doneStatus ? 'checked' : ''}
              onChange={ (e) => props.handleCheckBoxChange(props.item.id, e)}
              id={'input_' + props.myKey} />
            <label
              className={props.item.doneStatus ? 'done_task_text col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10' : 'col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'}>{props.item.todoContent}</label>
          </div>
          <div className='col-5 col-sm-4 col-md-3 col-lg-3 col-xl-3'>
            <button className="btn btn-primary width-45" onClick={ (e) => props.onEdit(props.item.id, e) }><i className="fas fa-pen-nib"></i></button>
            <button className="btn btn-danger width-45" onClick={ (e) => props.onDelete(props.item.id, e) }><i className="fas fa-times"></i></button>
          </div>
        </div>
      </li>
    );
  }

};
