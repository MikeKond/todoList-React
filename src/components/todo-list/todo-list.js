import React from "react";
import "./todo-list.css";

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={ id }>
        <TodoListItem { ...itemProps }/>
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;