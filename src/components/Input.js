import React from 'react';

/**
 *
 * @param {*} props
 */
export const Input = (props) => {
  return (
    <form className="row no-gutters" onSubmit={props.onSubmit}>
      <div className="col col-sm col-md col-lg col-xl">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="form-control"
          onChange={props.onChange}
          value={props.value} />
      </div>
      <div className="col-3 col-sm-3 col-md-3 col-3 col-xl-3">
        <button className="btn btn-primary width-90">Add</button>
      </div>
    </form>
  );
};
