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
        { label: "Drink Coffee", done: false, important: false, id: 1 },
        { label: "Build React App", done: false, important: false, id: 2 },
        { label: "Have lunch", done: false, important: false, id: 3 }
      ]
    };

    this.maxId = Math.max(...this.state.todoData.map((item) => { return item.id })); // maxId increases to add unique keys in list-items
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
  };

  addItem = (label) => {
    this.setState(({ todoData }) => {
      
      return {
        todoData: [...todoData.slice(), { label: label, id: ++this.maxId }]
      };
    });
  };

  toggleProperty = (id, prop) => {
    this.setState(({ todoData }) => {

      const ind = todoData.findIndex((item) => {
        return item.id === id;
      });

      const newItem = { ...todoData[ind] };
      newItem[prop] = !newItem[prop];

      return {
        todoData: [
          ...todoData.slice(0, ind), 
          newItem,
          ...todoData.slice(ind + 1)
        ]
      };
    });
  };

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
          onDeleted={ this.removeItem } 
          onToggledDone={ this.toggleProperty } 
          onToggledImportant={ this.toggleProperty } />

        <ItemAddForm 
          onAdded={ this.addItem }/>  
      </div>
    );
  }
};