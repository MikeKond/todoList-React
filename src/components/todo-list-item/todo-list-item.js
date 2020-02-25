import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

  }

  onLabelDone = () => {
    this.setState(({ done }) => {

      return {
        done: !done
      };
    });
  };

  onLabelImportant = () => {
    this.setState(({ important }) => {

      return {
        important: !important,
      };
    });
  };

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    
    let itemClass = "todo-list-item";

    if (this.state.done) {
      itemClass += " done";
    }

    if (this.state.important) {
      itemClass += " important";
    }

    return (
      <span className={ itemClass }>
        <span
          className="todo-list-item-label"
          onClick={ () => { this.onLabelDone() } }>
          { label }
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ () => { this.onLabelImportant() } }>
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