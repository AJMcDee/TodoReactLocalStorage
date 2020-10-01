import React, { Component } from "react";
import TodoCard from "./TodoCard";
let sampleData = [
  {
    id: 231540,
    title: "Test 01",
    description: "Don't forget to take out the trash every Thursday",
    due: "2020-09-24",
  },
  {
    id: 46346,
    title: "Test 02",
    description: "Call the school to arrange music lessons",
    due: "2020-10-23",
  },
  {
    id: 34673457,
    title: "Test 03",
    description: "Remind people about the party",
    due: "2021-03-23",
  },
  {
    id: 5747,
    title: "Test 04",
    description: "Arrange for dogsitter",
    due: "2020-11-29",
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData: sampleData,
    };
    this.handleDelete = this.handleDelete.bind(this);
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
          return (
            <TodoCard
              id={item.id}
              title={item.title}
              due={item.due}
              description={item.description}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
