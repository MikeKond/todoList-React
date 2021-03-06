import React, { Component } from "react";
import "./todo-list.css";

import TodoListItem from "../todo-list-item";

class TodoList extends Component {

  constructor() {
    super();
  }

  render() {

    const { todos } = this.props;
    const elements = todos.map((item) => {

      const { id, ...itemProps } = item;
  
      return (
        <li 
          key={ id }
          className="list-group-item">
          <TodoListItem 
            { ...itemProps } 
            onDeleted={ () => { this.props.onDeleted(id) } } 
            onToggledDone={ () => { this.props.onToggledDone(id, "done") } } 
            onToggledImportant={ () => { this.props.onToggledImportant(id, "important") } } />
        </li>
      );
    });
  
    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
  }
};

export default TodoList;