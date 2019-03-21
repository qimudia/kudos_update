import React from "react";
import axios from "axios";
import NoResults from './NoResults';
//import ReactDOM from 'react-dom'


class Result extends React.Component {

    state = {
        kudos: [],
     }

getKudos = () => {
    axios.get("/api/kudos")
     .then(result => {
         console.log(result);
        this.setState({ kudos: result.data })
     });
}
    
  componentDidMount() {
    this.getKudos();
        }
   

  render() {
    return (
      <div>
          {
          this.state.kudos.length === 0
          ? <NoResults />
          :
            this.state.kudos.map(kudo => (
              <div key={kudo._id}>
                <p>{kudo.title}</p>
                <p>{kudo.from[0].name}</p>
                <p>{kudo.to[0].name}</p>
                <p>{kudo.body}</p>
              </div>
          ))}
    
      </div>
    )
  }
}
//ReactDOM.render(<Result />, document.getElementById("root"))
export default Result;
