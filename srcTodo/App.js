import React, { Component } from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/Layout/Header"
import AddTodo from "./components/AddTodo"
import {v4 as uuid} from 'uuid'
import About from "./components/pages/About"
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: "title 1",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: "title 2",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: "title 3",
      //   completed: false,
      // },
    ],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => this.setState({ todos: response.data }))
  }

  // Toggle Complete
  markComplete = id => {
    console.log("print1")
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          console.log("print2")
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // delete todo
  delTodo = (id) =>{
    axios. delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]}));
    // console.log('delete', id)
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
  }
  
  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos?', {
      title,
      compled: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]})
    )
    // console.log(title)
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   complete: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}




export default App;
