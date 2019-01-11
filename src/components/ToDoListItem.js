import React from 'react';

export class ToDoListItem extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <li className="list-group-item todo_list_item">{this.props.value}</li>
    );
  }

}
