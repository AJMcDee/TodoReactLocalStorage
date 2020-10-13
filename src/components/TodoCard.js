import React from "react";

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const determineUrgencyClass = (todo) => {
      switch (this.props.urgency) {
        case "urgent":
          return "border-danger"
        case "important":
          return "border-primary"
        case "basic":
          return "border-secondary"
        case "whenever":
          return "border-success"
      }
    }

    const urgencyClass = determineUrgencyClass(this)
    const cardClasses = `card col-md-3 m-1 border ${urgencyClass}`
    return (
      <div className={cardClasses} id={this.props.id}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.due}</h6>
          <p className="card-text">{this.props.description}</p>
          <a href="#" className="btn btn-primary mr-2" onClick={() => this.props.handleEdit(this.props.id)}>
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
