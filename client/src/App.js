import React, { Component, useReducer } from "react";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import reducer, { initialState } from "./reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "APP STATE");
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Smurf Village Database
        </a>
      </nav>
      <main>
        <AddForm state={state} dispatch={dispatch} />
        <SmurfDisplay state={state} dispatch={dispatch} />
      </main>
    </div>
  );
};

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
