import React from "react";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card col-md-3 m-1">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.due}</h6>
          <p className="card-text">{this.props.description}</p>
          <a href="#" className="btn btn-primary mr-2">
            Edit
          </a>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            Delete
          </a>
        </div>
      </div>
    );
  }
}

export default TodoCard;
