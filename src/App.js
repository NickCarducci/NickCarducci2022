import React from "react";
import firebase from "./init-firebase.js";
import "./styles.css";

class App extends React.Component {
  state = { counted: 0 };
  render() {
    return (
      <div className="App">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          Nick Carducci
          <div
            style={{
              position: "absolute",
              transform: "translateX(115px)",
              fontSize: "10px",
              marginBottom: "5px",
              color: "grey"
            }}
          >
            .sh
          </div>
        </h1>
        <h2>Are you a New Jersey voter?</h2>
        <h2>Submit your signature! {this.state.counted}/800</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            firebase.firestore().collection("signatures").add({
              first: this.state.first,
              middle: this.state.middle,
              last: this.state.last,
              address: this.state.address,
              city: this.state.city,
              zip: this.state.zip
            });
          }}
        >
          <input
            onChange={(e) => this.setState({ first: e.target.value })}
            placeholder="first name"
          />
          <input
            onChange={(e) => this.setState({ middle: e.target.value })}
            placeholder="middle name"
          />
          <input
            onChange={(e) => this.setState({ last: e.target.value })}
            placeholder="last name"
          />
          <br />
          <input
            onChange={(e) => this.setState({ address: e.target.value })}
            placeholder="address"
          />
          <input
            onChange={(e) => this.setState({ city: e.target.value })}
            placeholder="city"
          />
          <input
            onChange={(e) => this.setState({ zip: e.target.value })}
            placeholder="zip"
          />
          <div style={{ fontSize: "12px" }}>
            This provisional signature to get on US Sentate ballot in 2022 will
            be contestable if <br />
            voter identity is ambiguous{" "}
            <a href="https://voter.svrs.nj.gov/registration-check">
              https://voter.svrs.nj.gov/registration-check
            </a>
          </div>
        </form>
        <h2>"Invoices are theft!"</h2>
        <h2>- Nick Carducci, 2020</h2>
        <div>I will support legislation that retains equity</div>
        <div>gained by the work of every individual</div>
        <div>and given by our Creator</div>
        {/*<br/>
        <div>I am writing a book, "Banking is not a Business"</div>*/}
        <br />
        <div>I am a civic tech entrepreneur, financial researcher</div>
        <div>& soon to be author of, "Banking is not a Business"</div>
        <br />
        {/*<div
          style={{
            position: "relative",
            height: "min-content",
            border: "3px solid",
            width: "min-content"
          }}
        >
          <img
            style={{ width: "60px", height: "auto" }}
            src="https://www.dl.dropboxusercontent.com/s/eauftjactpq8rnz/me.png?dl=0"
            alt=""
          />
        </div>*/}
      </div>
    );
  }
}
export default App;
