import { ADD_TASK, DELETE_TASK } from "./actionTypes";

export const addNewProject = (params) => (dispatch) => {
  dispatch({ type:ADD_TASK, payload: params });
};

export const DeleteSchedule = (refNO) => (dispatch) => {
  dispatch({ type:DELETE_TASK, payload: refNO });
};
