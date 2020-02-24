import React from "react";
import "./todo-list.css";

import TodoListItem from "../todo-list-item";

const TodoList = () => {

  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;