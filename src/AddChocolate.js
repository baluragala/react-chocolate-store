import React, { Component } from "react";

class AddChocolate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      size: "",
      price: 0,
      soh: 0,
      hasError: false,
      errorMessage: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    let eventSource = event.target;
    let value = eventSource.value;

    switch (eventSource.name) {
      case "name":
        this.setState({ name: value });
        break;
      case "brand":
        this.setState({ brand: value });
        break;
      case "price":
        this.setState({ price: parseInt(value) });
        break;
      case "size":
        this.setState({ size: value });
        break;
      case "soh":
        this.setState({ soh: parseInt(value) });
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    //validation
    if (this.validate()) {
      this.props.onChocolateAdd(this.state);
      this.setState({
        name: "",
        brand: "",
        size: "",
        price: 0,
        soh: 0,
        hasError: false,
        errorMessage: undefined
      });
    }
  }

  validate() {
    let { name, brand, size, price, soh } = this.state;
    let hasError = true;
    if (!name) {
      this.setState({ errorMessage: "Name is required", hasError });
      return false;
    }
    if (!brand) {
      this.setState({ errorMessage: "Brand is required", hasError });
      return false;
    }
    if (!size) {
      this.setState({ errorMessage: "Size is required", hasError });
      return false;
    }
    if (price === 0) {
      this.setState({ errorMessage: "Price must be > 0", hasError });
      return false;
    }
    if (soh === 0) {
      this.setState({ errorMessage: "Soh must be > 0", hasError });
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Add Chocolate</legend>
          {this.state.hasError && (
            <p style={styles.error}>{this.state.errorMessage}</p>
          )}
          <form onSubmit={this.handleSubmit}>
            <label>
              Name <span style={styles.required}>*</span>:<input
                type="text"
                name="name"
                style={styles.input}
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Brand <span style={styles.required}>*</span>:<input
                type="text"
                name="brand"
                style={styles.input}
                value={this.state.brand}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Price <span style={styles.required}>*</span>:<input
                type="number"
                name="price"
                style={styles.input}
                value={this.state.price}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Size <span style={styles.required}>*</span>:<select
                name="size"
                style={styles.input}
                value={this.state.size}
                onChange={this.handleChange}
              >
                <option defaultValue="">Select Size</option>
                <option defaultValue="SMALL">Small</option>
                <option defaultValue="MEDIUM">Medium</option>
                <option defaultValue="LARGE">Large</option>
              </select>
            </label>
            <label>
              Soh <span style={styles.required}>*</span>:<input
                type="number"
                name="soh"
                style={styles.input}
                value={this.state.soh}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Add" />
          </form>
        </fieldset>
      </div>
    );
  }
}

const styles = {
  input: {
    marginRight: 10
  },
  error: {
    color: "red"
  },
  required: {
    color: "red"
  }
};

export default AddChocolate;
