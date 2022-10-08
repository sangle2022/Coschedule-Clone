import { Toast, useToast } from "@chakra-ui/react";
import axios from "axios";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://thawing-plains-60298.herokuapp.com/signup", payload)
    .then((r) => {
      console.log(r);
      dispatch({ type: types.REGISTER_SUCCESS, payload: r });
    }).catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

export { register };