import React from "react";
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

function Main() {
  return (
    <div class="row d-flex justify-content-around">
      {sampleData.map((item) => {
        return (
          <TodoCard
            title={item.title}
            due={item.due}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Main;
