import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories:[]
  };

  componentDidMount(){
    this.getCategories();
  }

  getCategories = ()=> {
    fetch("http://localhost:3001/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));;
  }

  render() {
    return (
      <div>
        <h4
          className="p-3 mb-2 bg-black text-white"
          style={{ borderRadius: 10 }}
        >
          {this.props.title}
        </h4>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.name===this.props.currentCategory?true:false}
              onClick={()=> this.props.changeCategory(category)}
              key={category.id}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
       {/*<h4>{this.props.currentCategory}</h4>*/} 
      </div>
    );
  }
}
