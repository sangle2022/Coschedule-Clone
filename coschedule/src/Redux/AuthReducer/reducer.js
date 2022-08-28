
import * as types from "./actionTypes";


const initialState = {
  
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
