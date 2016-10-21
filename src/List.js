import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'

class List extends Component {

  constructor(props) {
  	super(props);
  	this.state={}
  	
  }
componentWillMount(){
  this.setState( { choclates :[
	{
		"id" : 1,
		"name":"Diary Milk",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5",
		"soh" : 10
	},
	{
		"id" : 2,
		"name":"5 Star",
		"brand" : "Cadbury",
		"size" : "small",
		"price" : "5",
		"soh" : 10
	},
	{
		"id" : 3,	
		"name":"KitKat",
		"brand" : "Nestle",
		"size" : "small",
		"price" : "8",
		"soh" : 4
	}
	]
})
}

  handleClick(id){
  	this.state.choclates.forEach(function(ele,index,arr){
  		if(ele.id === id){
  			ele.soh = ele.soh-1;  			
  		}
  	})
  }

  render() {
  	

	var rows = this.state.choclates.map(function(row){
			 return (<ListItem key={row.id} item={row} title="Gift" handleClick={this.handleClick.bind(this,row.id)}/>)
 		},this)

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