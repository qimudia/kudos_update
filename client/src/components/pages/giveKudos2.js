import React, { Component } from "react";
import { form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import "../../App.css";
//import { stringify } from "querystring";

class giveKudos2 extends Component {
  constructor(props) {
    super(props);

    this.AddTitle = this.AddTitle.bind(this);
    this.AddFrom = this.AddFrom.bind(this);
    this.AddTo = this.AddTo.bind(this);
    this.AddBody = this.AddBody.bind(this);

    this.state = {
      title: "",
      from: "",
      to: "",
      body: "",
      Kudos: []
    };
  }
  AddTitle(e) {
    this.setState({ title: e.target.value });
  }
  AddFrom(e) {
    this.setState({ from: e.target.value });
  }
  AddTo(e) {
    this.setState({ to: e.target.value });
  }
  AddBody(e) {
    this.setState({ body: e.target.value });
  }

  componentWillMount() {
    fetch("'mongodb://localhost/api/Kudos'")
      .then(res => res.text())
      .then(data => this.setState({ Kudos: data }));
  }

  render() {
    const KudosItem = this.state.Kudos.map((Kudos, index )=> (
      <div key={Kudos._id}>
        <h3>{Kudos.title}</h3>
        <p>{Kudos.from}</p>
        <p>{Kudos. to}</p>
        <p>{Kudos.body}</p>
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kudos List</h1>
        </header>
        <div className="Layout">
          <form>
            <FormGroup>
            Title
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Enter title"
                onChange={this.AddTitle}
              />
              <div>
              from
                <FormControl
                  type="text"
                  value={this.state.from}
                  placeholder="Select from"
                  onChange={this.AddFrom}
                />
              </div>
              <div>
              To
                <FormControl
                  type="text"
                  value={this.state.to}
                  placeholder="Select to"
                  onChange={this.AddTo}
                />
              </div>
              <div>
              Body
                <FormControl
                  type="text"
                  value={this.state.body}
                  placeholder="Enter your message"
                  onChange={this.AddBody}
                />
              </div>
            </FormGroup>
            <Button type="submit">Give Kudos</Button>
            <Button onClick={() => console.log({ KudosItem })}>Get</Button>
            </form>
        </div>
      </div>
    );
  }
}

export default giveKudos2;