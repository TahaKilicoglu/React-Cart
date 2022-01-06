import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
    alertify.success(this.state.password + " added to db!");
    alertify.success(this.state.city + " added to db!");
    alertify.success(this.state.description + " added to db!");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="Email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="enter email"
                type="email"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="Password" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                id="Password"
                name="password"
                placeholder="enter password"
                type="password"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                id="description"
                name="description"
                placeholder="description placeholder"
                type="textarea"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="city" sm={2}>
              City
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="city"
                id="city"
                onChange={this.handleChange}
              >
                <option>Bayburt</option>
                <option>İstanbul</option>
                <option>İzmir</option>
                <option>Ankara</option>
                <option>Kocaeli</option>
                <option>Bursa</option>
                <option>Çanakkale</option>
                <option>Antalya</option>
              </Input>
            </Col>
          </FormGroup>

          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
