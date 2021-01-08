import React from "react";
import { connect } from "react-redux";

class Smurf extends React.Component {
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
          <div data-testid="smurf" className="card">
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  <p>Name: {smurf.name}</p>
                  <p>Role: {smurf.position}</p>
                  <p>{smurf.description}</p>
                </div>
              );
            })}
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps, null)(Smurf);
//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
