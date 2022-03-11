import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button
        // onClick={() => {
        //   console.log("you clicked on me ");
        // }}
        type="Button"
        buttonStyle="btn--success--solid"
        buttonSize="btn--large"
      >
        {" "}
        Large{" "}
      </Button>

      <Button
        // testing

        // onClick={() => {
        //   console.log("you clicked on me ");
        // }}
        type="Button"
        buttonStyle="hfjfjfhfh"
        buttonSize="btn--medium"
      >
        {" "}
        medium{" "}
      </Button>

      <Button
        // onClick={() => {
        //   console.log("you clicked on me ");
        // }}
        type="Button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--small"
      >
        {" "}
        small{" "}
      </Button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
