import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR_TEXT = "SET_ERROR_TEXT";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, "RES HERE");
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addSmurf = newSmurf => {
  return { type: ADD_SMURF, payload: newSmurf };
};

export const errorText = error => {
  return { type: SET_ERROR_TEXT };
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server

//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
