import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://rest-api-vaibhav-clone.herokuapp.com/posts", payload)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

export { register };