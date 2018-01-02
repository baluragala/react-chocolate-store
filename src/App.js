import React, { Component } from "react";
import logo from "./choclate_logo.jpg";
import "./App.css";
import List from "./List";
import AddChocolate from "./AddChocolate";
import { maxBy } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chocolates: [
        {
          id: 1,
          name: "Diary Milk",
          brand: "Cadbury",
          size: "small",
          price: "5",
          soh: 10
        },
        {
          id: 2,
          name: "5 Star",
          brand: "Cadbury",
          size: "small",
          price: "5",
          soh: 10
        },
        {
          id: 3,
          name: "KitKat",
          brand: "Nestle",
          size: "small",
          price: "8",
          soh: 4
        }
      ]
    };
    this.handleChocolateAdd = this.handleChocolateAdd.bind(this);
    this.handleChocolateSale = this.handleChocolateSale.bind(this);
  }

  handleChocolateAdd(chocolate) {
    let newId = maxBy(this.state.chocolates, "id");
    let chocolates = this.state.chocolates.slice();
    chocolate["id"] = newId;
    chocolates.push(chocolate);
    this.setState({ chocolates });
  }

  handleChocolateSale(id) {
    var chocolates = [];
    this.state.chocolates.forEach((ele, index, arr) => {
      if (ele.id === id) {
        ele.soh -= 1;
      }
      chocolates.push(ele);
    });
    this.setState({ chocolates });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Chocolate Store</h2>
        </div>
        <AddChocolate onChocolateAdd={this.handleChocolateAdd} />
        <List
          chocolates={this.state.chocolates}
          onChocolateSale={this.handleChocolateSale}
        />
      </div>
    );
  }
}

export default App;
