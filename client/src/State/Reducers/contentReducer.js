import {
  GET_ALL_CONTENT_FAILURE,
  GET_ALL_CONTENT_REQUEST,
  GET_ALL_CONTENT_SUCCESS,
  GET_STUDENT_CONTENT_FAILURE,
  GET_STUDENT_CONTENT_REQUEST,
  GET_STUDENT_CONTENT_SUCCESS
} from "../ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  allContent: [],
  studentContent: []
};

const contentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allContent: payload
      };
    case GET_ALL_CONTENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        allContent: []
      };
    case GET_STUDENT_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_STUDENT_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentContent: payload
      };
    case GET_STUDENT_CONTENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        studentContent: []
      };
    default:
      return state;
  }
};

export default contentReducer;
