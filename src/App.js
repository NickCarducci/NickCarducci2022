import React from "react";
import firebase from "./init-firebase.js";
import "./styles.css";

class App extends React.Component {
  state = {
    signatures: 0,
    first: "",
    middle: "",
    last: "",
    address: "",
    city: "",
    zip: ""
  };
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("countData")
      .doc("only")
      .onSnapshot((doc) => {
        if (doc.exists) {
          var foo = doc.data();
          foo.id = doc.id;
          this.setState({ signatures: foo.count });
        }
      });
  };
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
        <h2>Submit your signature! {this.state.signatures}/800</h2>
        {this.state.finished ? (
          <h2>Thank you!</h2>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                this.state.first !== "" &&
                this.state.last !== "" &&
                this.state.address !== "" &&
                this.state.city !== "" &&
                this.state.zip !== ""
              ) {
                console.log("do");
                firebase
                  .firestore()
                  .collection("signatures")
                  .add({
                    first: this.state.first,
                    middle: this.state.middle,
                    last: this.state.last,
                    address: this.state.address,
                    city: this.state.city,
                    zip: this.state.zip
                  })
                  .then(() => {
                    this.setState({ finished: true });
                    firebase
                      .firestore()
                      .collection("countData")
                      .doc("only")
                      .get()
                      .then((doc) => {
                        if (doc.exists) {
                          firebase
                            .firestore()
                            .collection("countData")
                            .doc("only")
                            .update({
                              count: firebase.firestore.FieldValue.increment(1)
                            });
                        } else {
                          firebase
                            .firestore()
                            .collection("countData")
                            .doc("only")
                            .set({
                              count: firebase.firestore.FieldValue.increment(1)
                            });
                        }
                      })
                      .then(() => {
                        this.setState({ finished: true });
                      })
                      .catch((err) => console.log(err.message));
                  })
                  .catch((err) => console.log(err.message));
              } else
                return window.alert(
                  "please complete required fields, all except middle name"
                );
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
              This provisional signature to get on US Sentate ballot in 2022
              will be contestable if <br />
              voter identity is ambiguous{" "}
              <a href="https://voter.svrs.nj.gov/registration-check">
                https://voter.svrs.nj.gov/registration-check
              </a>
            </div>
            <button type="submit">submit</button>
          </form>
        )}
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
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <a
            href="https://saverparty.xyz"
            style={{
              textDecoration: "none",
              position: "relative",
              height: "min-content",
              border: "3px solid black",
              width: "min-content"
            }}
          >
            <img
              style={{ width: "60px", height: "auto" }}
              src="https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
              alt=""
            />
          </a>
          <a
            href="https://saverparty.xyz"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              marginTop: "4px"
            }}
          >
            saverparty.xyz
          </a>
        </div>
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
