import React, { Component } from "react";
import TodoCard from "./TodoCard";
import TodoCardEdit from "./TodoCardEdit";

let sampleData = [
  {
    id: 0,
    title: "Test 01",
    description: "Don't forget to take out the trash every Thursday",
    due: "2020-09-24",
    inEditMode: false,
  },
  {
    id: 1,
    title: "Test 02",
    description: "Call the school to arrange music lessons",
    due: "2020-10-23",
    inEditMode: false,
  },
  {
    id: 2,
    title: "Test 03",
    description: "Remind people about the party",
    due: "2021-03-23",
    inEditMode: false,
  },
  {
    id: 3,
    title: "Test 04",
    description: "Arrange for dogsitter",
    due: "2020-11-29",
    inEditMode: false,
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData: sampleData,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEdit(idNum) {
    sampleData[idNum].inEditMode = true;
    this.setState({ sampleData });
  }

  handleSave(idNum) {
    sampleData[idNum].inEditMode = false;
    this.setState({ sampleData });
  }

  handleDelete(idNum) {
    console.log("It does something " + idNum);
    function matchesIdNum(element) {
      return element.id == idNum;
    }

    let todoIndex = sampleData.findIndex(matchesIdNum);
    console.log(todoIndex);
    sampleData.splice(todoIndex, 1);
    console.log(sampleData);
    this.setState({ sampleData });
  }

  render() {
    return (
      <div className="row d-flex justify-content-around">
        {this.state.sampleData.map((item) => {
          if (item.inEditMode) {
            return (
              <TodoCardEdit
                key={item.id}
                inEditMode={item.inEditMode}
                id={item.id}
                title={item.title}
                due={item.due}
                description={item.description}
                handleSave={this.handleSave}
                handleDelete={this.handleDelete}
              />
            );
          } else {
            return (
              <TodoCard
                key={item.id}
                inEditMode={item.inEditMode}
                id={item.id}
                title={item.title}
                due={item.due}
                description={item.description}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default Main;
