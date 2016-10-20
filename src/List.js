import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'

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
			 return (<ListItem item={row} />)
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