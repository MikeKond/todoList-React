import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  constructor() {
    super();
  }

  render() {

    const { 
      label, 
      onDeleted, 
      onToggledDone: toggleDone, 
      onToggledImportant: toggleImportant 
    } = this.props;

    const { done, important } = this.props;
    
    let itemClass = "todo-list-item";

    if (done) {
      itemClass += " done";
    }

    if (important) {
      itemClass += " important";
    }

    return (
      <span className={ itemClass }>
        <span
          className="todo-list-item-label"
          onClick={ () => { toggleDone(); } }>
          { label }
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ () => { toggleImportant() } }>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}