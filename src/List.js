import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'

class List extends Component {

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
    var choclates=[]
  	this.state.choclates.forEach((ele,index,arr) => {
  		if(ele.id === id){
  			ele.soh -= 1;  			
  		}
      choclates.push(ele)
  	})
    this.setState({choclates})
  }

  render() {
  	

	var rows = this.state.choclates.map(function(row){
			 return (<ListItem key={row.id} item={row} title="Sell" handleClick={this.handleClick.bind(this,row.id)}/>)
 		},this)

  	return (
  		<table>
        <thead>
  			 <tr>
  				<th>Name</th>
  				<th>Brand</th>
  				<th>Size</th>
  				<th>Price</th>
  				<th>Soh</th>
  			</tr>
        </thead>
        <tbody>
  			{rows}
        </tbody>
  		</table>
  	
  	);
  }
}

export default List