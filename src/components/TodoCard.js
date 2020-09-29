import React from "react";


class TodoCard extends React.Component {

render() {
  return (
    <div class="card col-md-3 m-1">
      <div class="card-body">
        <h5 class="card-title">{this.props.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{this.props.due}</h6>
        <p class="card-text">{this.props.description}</p>
        <a href="#" class="btn btn-primary mr-2">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
      );
}
}

export default TodoCard;
