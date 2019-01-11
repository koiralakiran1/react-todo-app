import React from 'react';

export class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="add_item_bar form-group" onSubmit={this.props.onSubmit}>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="form-control"
          onChange={this.props.onChange}
          value={this.props.value} />
      </form>

    );
  }

}
