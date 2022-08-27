
import * as types from "./actionTypes";

export const addNewProject = (params) => (dispatch) => {
  dispatch({ type: types.ADD_NEW_PROJECT, payload: params });
};

export const deleteProject = (refNO) => (dispatch) => {
  dispatch({ type: types.Delete_PROJECT, payload: refNO });
};
