import {
  GET_ALL_STUDENTS_FAILURE,
  GET_ALL_STUDENTS_REQUEST,
  GET_ALL_STUDENTS_SUCCESS
} from "../ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  students: []
};

const studentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        students: payload
      };
    case GET_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        students: []
      };
    default:
      return state;
  }
};

export default studentReducer;
