import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'

class List extends Component {


  handleClick(){
  	console.log('clicked...')
  }

  render() {

  	let choclates=[
	{
		"name":"Diary Milk",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5",
		"soh" : 10
	},
	{
		"name":"5 Star",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5",
		"soh" : 10
	},
	{
		"name":"KitKat",
		"brand" : "Nestle",
		"size" : "small",
		"price" : "8",
		"soh" : 0
	}
	];

	var rows = choclates.map(function(row){
			 return (<ListItem item={row}/>)
 		})

  	return (
  		<table>
  			<thead>
  				<th>Name</th>
  				<th>Brand</th>
  				<th>Size</th>
  				<th>Price</th>
  				<th>Soh</th>
  			</thead>
  			{rows}
  		</table>
  	
  	);
  }
}

export default List