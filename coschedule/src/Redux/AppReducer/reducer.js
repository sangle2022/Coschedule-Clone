import { ADD_TASK, DELETE_TASK } from "./actionTypes";
const initialState = {
  project: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return { ...state, project: [...state.project, payload] };

    case DELETE_TASK:
      let Delete = state.project.filter((e) => e.refNO !== payload);
      return { ...state, project: Delete };
    default:
      return state;
  }
};
