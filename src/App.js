import './index.css';
// import components for use within App
import ToDoItem from './components/Todoitem'
import todoData from './components/todoData'
import React from 'react';
// class based component 
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id){

    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {todos : updatedTodos}
    })
  }



  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
    handleChange={this.handleChange}/>)

  return (
    <div className="todo-List" >
    {todoItems}
  </div>
    )
  }
}

export default App;
