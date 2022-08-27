import * as types from "./actionTypes";

const initialState = {
  project: [],
};

export const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case types.ADD_NEW_PROJECT:
      let newprojectArr = [...state.project, payload];
      return { ...state, project: newprojectArr };

    case types.Delete_PROJECT:
      let deleteArray = state.project.filter((e) => e.refNO !== payload);
      return { ...state, project: deleteArray };

    default:
      return state;
  }
};
