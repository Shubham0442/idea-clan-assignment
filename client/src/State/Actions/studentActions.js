import axios from "axios";
import {
  GET_ALL_STUDENTS_FAILURE,
  GET_ALL_STUDENTS_REQUEST,
  GET_ALL_STUDENTS_SUCCESS,
  UPDATE_STUDENT_ROLE_FAILURE,
  UPDATE_STUDENT_ROLE_REQUEST,
  UPDATE_STUDENT_ROLE_SUCCESS
} from "../ActionTypes";

export const getAllStudents = (token) => (dispatch) => {
  dispatch({ type: GET_ALL_STUDENTS_REQUEST });

  axios({
    url: `${process.env.REACT_APP_BASE_URL}/students`,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      dispatch({ type: GET_ALL_STUDENTS_SUCCESS, payload: res.data.students });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_STUDENTS_FAILURE });
    });
};

export const updateStudentRole = (studentId, token) => (dispatch) => {
  dispatch({ type: UPDATE_STUDENT_ROLE_REQUEST });

  return axios
    .patch({
      url: `${process.env.REACT_APP_BASE_URL}/students/${studentId}`,
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      return dispatch({ type: UPDATE_STUDENT_ROLE_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_STUDENT_ROLE_FAILURE });
    });
};
