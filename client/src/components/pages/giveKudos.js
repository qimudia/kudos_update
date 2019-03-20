import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import "../../App.css";
import axios from "axios";
//import { Button } from 'reactstrap';
//import { Button } from 'react-native';
//import { stringify } from "querystring";

// const $ = window.$

const kudos = props => (
  <div>
    <h1>Kudos List</h1>
    {props.kudoList.map(kudo => (
      <Kudo
        title={kudo.title}
        from={kudo.from}
        to={kudo.to}
        body={kudo.body}
        key={kudo.id}
      />
    ))}
  </div>
);

const Kudo = props => (
  <div>
    <h2>Title: {props.title}</h2>
    <p>From: {props.from}</p>
    <p>To: {props.to}</p>
    <p>Message: {props.body}</p>
  </div>
);

class giveKudos extends React.Component {
  state = {
    viewKudos: [],
    title: "",
    from: "",
    to: "",
    body: "",
    users: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ from: event.target.value });
    // this.setState({ to: event.target.value });
    // this.setState({ body: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    axios
      .post("/api/kudos", {
        title: this.state.title,
        from: this.state.from,
        to: this.state.to,
        body: this.state.body
      })
      .then(result => {
        console.log("result", result.data);
      });
  };

  componentDidMount() {
    axios.get("/api/kudos").then(result => {
      this.setState({ kudosList: result.data });
    });
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        <Form>
          <input
            name="title"
            value={this.title}
            placeholder="Enter title"
            onChange={this.handleChange}
          />
          <select
            name="from"
            value={this.from}
            placeholder="Select from"
            onChange={this.handleChange}
          >
            <option selected disabled value="">
              Sender
            </option>
            {this.state.users.map(user => (
              <option value={user._id} key={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          <select
            name="to"
            value={this.to}
            placeholder="Select to"
            onChange={this.handleChange}
          >
          <option selected disabled value="">
              Receiver
            </option>
            {this.state.users.map(user => (
              <option value={user._id} key={user._id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            name="body"
            value={this.body}
            placeholder="Enter message"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}> Give Kudos </button>
        </Form>
      </div>
    );
  }
}

//ReactDOM.render(<giveKudos />, document.getElementById("root"));

export default giveKudos;
