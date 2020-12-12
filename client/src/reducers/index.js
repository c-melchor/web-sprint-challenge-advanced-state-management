import { FETCH_SMURFS, ADD_SMURF, FETCH_SMURF_SUCCESS } from "../actions";

export const initialState = {
  smurfs: [],
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === FETCH_SMURFS) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_SMURF_SUCCESS) {
    return {
      ...state,
      smurfs: [action.payload],
      loading: false
    };
  } else if (action.payload === ADD_SMURF) {
    console.log(action, "ADD SMURF ACIOTN??????");
    return { ...state, smurfs: [...state.smurfs].push(action.payload) };
  }
  //   switch (action.type) {
  //     case FETCH_SMURFS:
  //       return { ...state, loading: true };
  //     case FETCH_SMURF_SUCCESS:
  //       return {
  //         ...state,
  //         smurfs: [...state.smurfs, action.payload],
  //         loading: false
  //       };
  // default:
  return state;
  //   }
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
