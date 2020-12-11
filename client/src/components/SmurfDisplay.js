import React, { useEffect } from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";

const SmurfDisplay = props => {
  console.log(props.state.smurfs, "smurfs");
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  console.log(props.state.smurfs, "smurfs2");

  return (
    <div>
      {props.state.smurfs.map(smurf => {
        return <p>{smurf.name}</p>;
      })}
    </div>
  );
};

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.

export default connect(null, { fetchSmurfs })(SmurfDisplay);
