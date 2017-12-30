import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: "Gift"
  };

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.brand}</td>
        <td>{this.props.item.size}</td>
        <td>{this.props.item.price}</td>
        <td className={this.props.item.soh > 0 ? "" : "no-stock"}>
          {this.props.item.soh > 0 ? this.props.item.soh : "No Stock"}
        </td>
        {this.props.item.soh > 0 ? (
          <td>
            <input
              type="button"
              value={this.props.title}
              onClick={this.props.handleClick}
            />
          </td>
        ) : (
          ""
        )}
      </tr>
    );
  }
}

export default ListItem;
