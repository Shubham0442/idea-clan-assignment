import axios from "axios";
import {
  ADD_NEW_CONTENT_FAILURE,
  ADD_NEW_CONTENT_REQUEST,
  ADD_NEW_CONTENT_SUCCESS,
  GET_ALL_CONTENT_FAILURE,
  GET_ALL_CONTENT_REQUEST,
  GET_ALL_CONTENT_SUCCESS,
  GET_STUDENT_CONTENT_FAILURE,
  GET_STUDENT_CONTENT_REQUEST,
  GET_STUDENT_CONTENT_SUCCESS,
  REMOVE_CONTENT_FAILURE,
  REMOVE_CONTENT_REQUEST,
  REMOVE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAILURE,
  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS
} from "../ActionTypes";

export const getAllContent = (token) => (dispatch) => {
  dispatch({ type: GET_ALL_CONTENT_REQUEST });

  axios({
    url: `${process.env.REACT_APP_BASE_URL}/content`,
    method: "get",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      dispatch({ type: GET_ALL_CONTENT_SUCCESS, payload: res.data.content });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_CONTENT_FAILURE });
    });
};

export const addNewContent = (token, content) => (dispatch) => {
  dispatch({ type: ADD_NEW_CONTENT_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/content/new`,
    method: "post",
    headers: {
      authorization: `Bearer ${token}`
    },
    data: content
  })
    .then((res) => {
      return dispatch({ type: ADD_NEW_CONTENT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: ADD_NEW_CONTENT_FAILURE });
    });
};

export const updateContent = (token, contentId, content) => (dispatch) => {
  dispatch({ type: UPDATE_CONTENT_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/content/update/${contentId}`,
    method: "patch",
    headers: {
      authorization: `Bearer ${token}`
    },
    data: content
  })
    .then((res) => {
      return dispatch({ type: UPDATE_CONTENT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_CONTENT_FAILURE });
    });
};

export const removeContent = (token, contentId) => (dispatch) => {
  dispatch({ type: REMOVE_CONTENT_REQUEST });

  return axios({
    url: `${process.env.REACT_APP_BASE_URL}/content/remove/${contentId}`,
    method: "delete",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({ type: REMOVE_CONTENT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_CONTENT_FAILURE });
    });
};

export const getStudentContent =
  (token, studentCourseDetails) => (dispatch) => {
    // console.log(studentCourseDetails);
    dispatch({ type: GET_STUDENT_CONTENT_REQUEST });

    axios({
      url: `${process.env.REACT_APP_BASE_URL}/content/student`,
      method: "get",
      headers: {
        authorization: `Bearer ${token}`
      },
      params: {
        courses: studentCourseDetails === false ? [] : studentCourseDetails
      }
    })
      .then((res) => {
        dispatch({
          type: GET_STUDENT_CONTENT_SUCCESS,
          payload: res.data.content
        });
      })
      .catch((err) => {
        dispatch({ type: GET_STUDENT_CONTENT_FAILURE });
      });
  };
