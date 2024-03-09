import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../ActionTypes";
import axios from "axios";

export const register = (registerCridentials) => (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });

  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/signup`, registerCridentials)
    .then((res) => {
      return dispatch({
        type: USER_REGISTER_SUCCESS
      });
    })
    .catch((err) => {
      dispatch({ type: USER_REGISTER_FAILURE });
    });
};

export const login = (loginCridentials) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/login`, loginCridentials)
    .then((res) => {
      console.log("res", res);
      return dispatch({ type: USER_LOGIN_SUCCESS, payload: res?.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const logout = (userId, payload) => (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });

  return axios
    .patch(`${process.env.REACT_APP_BASE_URL}/logout/${userId}`, payload)
    .then((res) => {
      return dispatch({ type: USER_LOGOUT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_LOGOUT_FAILURE });
    });
};
