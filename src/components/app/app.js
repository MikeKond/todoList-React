import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Build React App", important: true, id: 2 },
        { label: "Have lunch", important: false, id: 3 }
      ]
    };

  }

  removeItem = (id) => {
    this.setState(({ todoData }) => {
      const ind = todoData.findIndex((item) => item.id === id);

      return {
        todoData: [
          ...todoData.slice(0, ind),
          ...todoData.slice(ind + 1)
        ]
      };
    });
  }

  render() {
    
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={ 1 } done={ 3 }/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={ todoData } 
          onDeleted={ this.removeItem } />

        <ItemAddForm />  
      </div>
    );
  }
};