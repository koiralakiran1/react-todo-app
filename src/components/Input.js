import React from 'react';

export const Input = (props) => {
  return (
    <form className="add_item_bar form-group" onSubmit={props.onSubmit}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
        onChange={props.onChange}
        value={props.value} />
    </form>
  );
};
