import axios from "axios";
import {
  ADD_MY_COURSE_FAILURE,
  ADD_MY_COURSE_REQUEST,
  ADD_MY_COURSE_SUCCESS,
  GET_MY_COURSES_FAILURE,
  GET_MY_COURSES_REQUEST,
  GET_MY_COURSES_SUCCESS,
  REMOVE_MY_COURSE_FAILURE,
  REMOVE_MY_COURSE_REQUEST,
  REMOVE_MY_COURSE_SUCCESS
} from "../ActionTypes";

export const getMyCourses = (token, userId) => (dispatch) => {
  dispatch({ type: GET_MY_COURSES_REQUEST });

  axios({
    url: `${process.env.REACT_APP_BASE_URL}/mycourses/${userId}`,
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      dispatch({ type: GET_MY_COURSES_SUCCESS, payload: res.data.myCourses });
    })
    .catch((err) => {
      dispatch({ type: GET_MY_COURSES_FAILURE });
    });
};

export const addMyCourse = (token, course) => (dispatch) => {
  dispatch({ type: ADD_MY_COURSE_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/mycourses/new`,
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`
    },
    data: course
  })
    .then((res) => {
      return dispatch({ type: ADD_MY_COURSE_SUCCESS });
    })
    .catch((err) => {
      return dispatch({
        type: ADD_MY_COURSE_FAILURE,
        payload: err?.response?.data
      });
    });
};

export const removeMyCourse = (token, courseId) => (dispatch) => {
  dispatch({ type: REMOVE_MY_COURSE_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/mycourses/remove/${courseId}`,
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: REMOVE_MY_COURSE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_MY_COURSE_FAILURE });
    });
};
