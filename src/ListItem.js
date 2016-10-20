import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  
  render(){
  	return <tr>
  		<td>{this.props.item.name}</td>
  		<td>{this.props.item.brand}</td>
  		<td>{this.props.item.size}</td>
  		<td>{this.props.item.price}</td>
  	</tr>	
 }
}

export default ListItem