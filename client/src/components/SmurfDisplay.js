import React from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    {
      if (!this.props.smurfs) {
        return (
          <div>
            <p>...loading</p>
          </div>
        );
      } else {
        return (
          <div>
            <Smurf />
          </div>
        );
      }
    }
  }
}

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);
