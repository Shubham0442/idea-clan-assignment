import {
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS
} from "../ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  courses: []
};

const courseReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        courses: payload,
        isError: false,
      };
    case GET_ALL_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        courses: []
      };
    default:
      return state;
  }
};

export default courseReducer;
