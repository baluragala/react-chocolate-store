import React, { Component } from "react";
import "./List.css";
import ListItem from "./ListItem";

class List extends Component {
  handleClick(id) {
    this.props.onChocolateSale(id);
  }

  render() {
    var rows = this.props.chocolates.map(function(row) {
      return (
        <ListItem
          key={row.id}
          item={row}
          title="Sell"
          handleClick={this.handleClick.bind(this, row.id)}
        />
      );
    }, this);

    return (
      <table className="chakolate-store-tbl">
        <thead className="chakolate-store-tb1-thead">
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Size</th>
            <th>Price</th>
            <th>Soh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default List;
