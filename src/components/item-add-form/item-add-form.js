import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {

  render() {

    const { onAdded: addItem } = this.props;

    return (
      <div className="item-add-form">
        <button 
          className="btn btn-outline-secondary"
          onClick={ () => { addItem("new el text"); } }>Add Item</button>
      </div>
    );
  }
}