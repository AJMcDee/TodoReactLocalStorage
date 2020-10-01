import React from "react";

class TodoCardEdit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card col-md-3 m-1" id={this.props.id}>
        <div className="card-body">
          <input className="card-title" placeholder={this.props.title}></input>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.due}</h6>
          <p className="card-text">{this.props.description}</p>
          <a
            href="#"
            className="btn btn-success mr-2"
            onClick={() => this.props.handleSave(this.props.id)}
          >
            Save
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

export default TodoCardEdit;
