import React, { Component } from 'react'
import TodoCard from './TodoCard'
import TodoCardEdit from './TodoCardEdit'
import Navbar from './Navbar'

let todoDataArray = [
  {
    id: 0,
    title: 'Test 01',
    description: "Don't forget to take out the trash every Thursday",
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
    description: 'Arrange for dogsittter',
    due: '2020-11-29',
    inEditMode: false
  }
]


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
    const newState = JSON.stringify(this.state.todoData)
    localStorage.setItem('todoDataString', newState)
  }

  handleEdit (idNum) {
    this.setState(prevState => ({
      todoData: prevState.todoData.map(obj =>
        obj.id === idNum
          ? Object.assign(obj, {
              inEditMode: true
            })
          : obj
      )
    }))
  }



  handleSave (idNum, title, due, description) {
    this.setState(
      prevState => ({
        todoData: prevState.todoData.map(obj =>
          obj.id === idNum
            ? Object.assign(obj, {
                inEditMode: false,
                title: title,
                due: due,
                description: description
              })
            : obj
        )
      }),
      this.updateLocalStorage
    )
  }

  handleDelete (idNum) {
    function matchesIdNum (element) {
      return element.id == idNum
    }

    let todoIndex = todoData.findIndex(matchesIdNum)
    todoData.splice(todoIndex, 1)
    this.setState({ todoData })
  }

  handleNewTodo () {
    console.log('It works')
    const newID = this.state.todoData.length
    const emptyTodo = {
      id: newID,
      title: '',
      description: '',
      due: '',
      inEditMode: true
    }
    todoData.push(emptyTodo)
    this.setState(prevState => ({
      todoData: todoData
    }))
  }

  render () {
    return (
      <div className='container d-flex flex-column align-items-center'>
        <Navbar handleClick={this.handleNewTodo} />
        <div className='row d-flex justify-content-around'>
          {this.state.todoData.map(item => {
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
