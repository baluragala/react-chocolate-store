import React, { Component } from "react";

class AddChocolate extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Add Chocolate</legend>
          <form>
            <label>Name:<input type="text" style={styles.input}/></label>
            <label>Brand:<input type="text" style={styles.input}/></label>
            <label>Price:<input type="number" style={styles.input}/></label>
            <label>Soh:<input type="number" style={styles.input}/></label>
            <input type="submit" value="Add"/>
          </form>
        </fieldset>
      </div>
    );
  }
}

const styles = {
    input:{
        marginRight:10
    }
}

export default AddChocolate;
