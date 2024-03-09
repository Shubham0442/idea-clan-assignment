import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from "../ActionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  token: null,
  user: {}
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload?.token,
        user: payload?.user
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: true,
        token: null,
        user: {}
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: false,
        token: null,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
