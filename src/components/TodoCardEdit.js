import React from "react";

class TodoCardEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      id: this.props.id,
      due: this.props.due,
      urgency: this.props.urgency,
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="card col-md-3 m-1" id={this.props.id}>
        <div className="card-body">
          <div className=" d-flex flex-column">
            <input
              className="card-title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <input
              name="due"
              type="date"
              value={this.state.due}
              onChange={this.handleChange}
            />
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="my-3"
            />
            <label htmlFor="urgency">Urgency:</label>
            <select
              name="urgency"
              value={this.state.urgency}
              onChange={this.handleChange}
            >
              <option value="urgent">Urgent</option>
              <option value="important">Important</option>
              <option value="basic">Basic</option>
              <option value="whenever">Whenever</option>
            </select>
          </div>
          <a
            href="#"
            className="btn btn-success mr-2"
            onClick={() =>
              this.props.handleSave(
                this.props.id,
                this.state.title,
                this.state.due,
                this.state.description,
                this.state.urgency
              )
            }
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
