import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h4
          className="p-3 mb-2 bg-black text-white"
          style={{ borderRadius: 10 }}
        >
          {this.props.title}-- 
          {this.props.currentCategory}
        </h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price </th>
              <th>Units In Stock</th>
              <th>Quantity Per Unit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.quantityPerUnit}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="primary"
                    outline
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
