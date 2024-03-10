import axios from "axios";
import {
  ADD_NEW_COURSE_FAILURE,
  ADD_NEW_COURSE_REQUEST,
  ADD_NEW_COURSE_SUCCESS,
  FILTER_CATEGORY,
  FILTER_TYPE,
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  REMOVE_COURSE_FAILURE,
  REMOVE_COURSE_REQUEST,
  REMOVE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS
} from "../ActionTypes";

export const getAllCourses = (token, reqFilter) => (dispatch) => {
  dispatch({ type: GET_ALL_COURSES_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/course`,
    method: "get",
    headers: {
      "authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    params: { ...reqFilter }
  })
    .then((res) => {
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: res?.data?.courses
      });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_COURSES_FAILURE });
    });
};

export const addNewCourse = (token, newCourse) => (dispatch) => {
  dispatch({ type: ADD_NEW_COURSE_REQUEST });
  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/course/new`,
    method: "post",
    data: newCourse,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: ADD_NEW_COURSE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: ADD_NEW_COURSE_FAILURE });
    });
};

export const updateCourse = (courseId, token, updatedCourse) => (dispatch) => {
  dispatch({ type: UPDATE_COURSE_REQUEST });
  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/course/update/${courseId}`,
    method: "patch",
    data: updatedCourse,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: UPDATE_COURSE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_COURSE_FAILURE });
    });
};

export const removeCourse = (token, courseId) => (dispatch) => {
  dispatch({ type: REMOVE_COURSE_REQUEST });
  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/course/remove/${courseId}`,
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: REMOVE_COURSE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_COURSE_FAILURE });
    });
};

export const filterCategory = (payload) => (dispatch) => {
  return dispatch({ type: FILTER_CATEGORY, payload });
};

export const filterType = (payload) => (dispatch) => {
  return dispatch({ type: FILTER_TYPE, payload });
};
