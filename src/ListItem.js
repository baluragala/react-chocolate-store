import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {

  constructor(props) {
    super(props);
    
  }

  static propTypes = {
    item : React.PropTypes.object.isRequired,
    handleClick : React.PropTypes.func.isRequired,
    title : React.PropTypes.string.isRequired
    }
  
  
  render(){
  	
  	return <tr>
  		<td>{this.props.item.name}</td>
  		<td>{this.props.item.brand}</td>
  		<td>{this.props.item.size}</td>
  		<td>{this.props.item.price}</td>
  		<td className={this.props.item.soh > 0 ? "" : "no-stock"}>{this.props.item.soh > 0 ? this.props.item.soh : "No Stock"}</td>
  		{this.props.item.soh > 0 ? <td>
  			<input type="button" 
  				   value={this.props.title}
  				   onClick={this.props.handleClick}
  		    />
  		</td> : ""}
  		
  	</tr>	
 }
}

export default ListItem