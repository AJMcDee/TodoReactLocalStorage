import React, { Component } from 'react'
import TodoCard from './TodoCard'
import TodoCardEdit from './TodoCardEdit'
import Navbar from './Navbar'

let todoDataArray = [
  {
    id: 0,
    title: 'Test 01',
    description: "Don't forget to  take out the trash every Thursday",
    due: '2020-09-24',
    inEditMode: false
  },
  {
    id: 1,
    title: 'Test 02',
    description: 'Call the school to arrange music lessons',
    due: '2020-10-23',
    inEditMode: false
  },
  {
    id: 2,
    title: 'Test 03',
    description: 'Remind people about the party',
    due: '2021-03-23',
    inEditMode: false
  },
  {
    id: 3,
    title: 'Test 04',
    description: 'Arrangse for dogsittter',
    due: '2020-11-29',
    inEditMode: false
  },
  null
]

// localStorage.clear
// localStorage.setItem('todoDataString', JSON.stringify(todoDataArray))

console.log(localStorage.getItem('todoDataString'))

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoData: JSON.parse(localStorage.getItem('todoDataString'))
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleNewTodo = this.handleNewTodo.bind(this)
  }

  updateLocalStorage () {
    console.log(this.state.todoData)
    const newState = JSON.stringify(this.state.todoData)
    localStorage.setItem('todoDataString', newState)
  }

  handleEdit (idNum) {
    let currentTodoData = this.state.todoData
    currentTodoData[idNum].inEditMode = true
    this.setState({ todoData: currentTodoData })
  }

  handleSave (idNum, title, due, description, urgency) {
    let currentTodoData = this.state.todoData
    currentTodoData[idNum] = {
      id: idNum,
      title: title ? title : '',
      due: due ? due : '2001-01-01',
      description: description ? description : '',
      inEditMode: false,
      urgency: urgency,
    }
    this.setState({ todoData: currentTodoData }, this.updateLocalStorage)
    console.log(currentTodoData)
  }

  handleDelete (idNum) {
    const currentTodoData = this.state.todoData
    currentTodoData[idNum] = null
    this.setState({ todoData: currentTodoData }, this.updateLocalStorage)
  }

  handleNewTodo () {
    console.log(this.state.todoData)
    const newID = this.state.todoData.length
    const emptyTodo = {
      id: newID,
      title: '',
      description: '',
      due: '',
      inEditMode: true,
      urgency: 'basic',
    }
    let currentTodoData = this.state.todoData
    currentTodoData.push(emptyTodo)
    this.setState({ todoData: currentTodoData })
  }

  render () {
    return (
      <div className='container d-flex flex-column align-items-center'>
        <Navbar handleClick={this.handleNewTodo} />
        <div className='row d-flex justify-content-around'>
          {this.state.todoData
            .filter(todo => todo != null)
            .map(item => {
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
                    urgency={item.urgency}
                  />
                )
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
                    urgency={item.urgency}
                  />
                )
              }
            })}
        </div>
      </div>
    )
  }
}

export default Main
