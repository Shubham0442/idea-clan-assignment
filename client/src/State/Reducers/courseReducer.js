import {
  FILTER_CATEGORY,
  FILTER_TYPE,
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS
} from "../ActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  courses: [],
  filters: {
    category: [],
    type: []
  }
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
        isError: false
      };
    case GET_ALL_COURSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        courses: []
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          category: payload
        }
      };
    case FILTER_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          type: payload
        }
      };
    default:
      return state;
  }
};

export default courseReducer;
