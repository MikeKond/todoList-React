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

    this.maxId = 0; // maxId increases to add unique keys in list-items

    this.state = {
      todoData: [
        this.createItem("Drink Coffee"),
        this.createItem("Make React App"),
        this.createItem("Have lunch")
      ],

      filter: "all" // all, active, done
    };

  }

  createItem = (label) => {

    return {
      label,
      important: false,
      done: false,
      id: ++this.maxId
    };
  };

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

  filter = (filter, items) => {
    switch (filter) {
      case "all": 
        return items;

      case "done":
        return items.filter((item) => {
          return item.done;
        });

      case "active": 
        return items.filter((item) => {
          return item.important;
        });
    }
  };

  render() {
    
    const { todoData, filter } = this.state,
          doneCount            = todoData.filter((item) => item.done).length,
          todoCount            = todoData.length - doneCount;

    let visibleItems = this.filter("active", todoData);
    console.log(visibleItems);

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount }/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={ visibleItems } 
          onDeleted={ this.removeItem } 
          onToggledDone={ this.toggleProperty } 
          onToggledImportant={ this.toggleProperty } />

        <ItemAddForm 
          onAdded={ this.addItem }/>  
      </div>
    );
  }
};