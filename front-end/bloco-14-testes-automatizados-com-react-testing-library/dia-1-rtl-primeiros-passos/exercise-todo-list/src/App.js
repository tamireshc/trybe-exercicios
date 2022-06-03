import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(indexTodo) {

  }

  removeTodo(indexTodo) {
    const { listTodo } = this.state;
    const newListToDo = listTodo.filter((item) => item !== indexTodo);
    console.log(indexTodo);
    this.setState({
      listTodo: newListToDo,
    });
  }

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } funcRemove={ () => this.removeTodo(todo) } />
              {/* Colocar os botões aqui */}
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
