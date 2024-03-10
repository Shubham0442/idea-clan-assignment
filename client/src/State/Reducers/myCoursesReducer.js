import {
  GET_MY_COURSES_FAILURE,
  GET_MY_COURSES_REQUEST,
  GET_MY_COURSES_SUCCESS
} from "../ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  myCourses: []
};

const myCourseReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MY_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_MY_COURSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myCourses: payload
      };
    case GET_MY_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        myCourses: []
      };
    default:
      return state;
  }
};

export default myCourseReducer;
