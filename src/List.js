import React, { Component } from 'react';
import './List.css';

class List extends Component {

  render() {

  	let choclates=[
	{
		"name":"Diary Milk",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5"
	},
	{
		"name":"5 Star",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5"
	},
	{
		"name":"KitKat",
		"brand" : "Nestle",
		"size" : "small",
		"price" : "8"
	}
	];

	var rows = choclates.map(function(row){
			 return <tr>
				 <td>{row.name}</td>
				 <td>{row.brand}</td>
				 <td>{row.size}</td>
				  <td>{row.price}</td>
			 </tr>
 		})

  	return (
  		<table>
  			<thead>
  				<th>Name</th>
  				<th>Brand</th>
  				<th>Size</th>
  				<th>Price</th>
  			</thead>
  			{rows}
  		</table>
  	
  	);
  }
}

export default List