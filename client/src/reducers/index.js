import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR
} from "../actions";
import axios from "axios";

export const initialState = {
  isLoading: false,
  smurfs: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
