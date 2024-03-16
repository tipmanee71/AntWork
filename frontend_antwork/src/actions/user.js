import {
  USERPROFILE_FETCHING,
  USERPROFILE_FAILED,
  USERPROFILE_SUCCESS,
  USERS_FETCHING,
  USERS_FAILED,
  USERS_SUCCESS,
} from "./types";

import UserService from "../services/user.service";

export const getUserProfile = () => async (dispatch) => {
  try {
    const res = await UserService.getUserProfile();
    if (res) {
      dispatch({
        type: USERPROFILE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: USERPROFILE_FAILED,
    });
    console.log(err);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAllUsers();
    if (res) {
      dispatch({
        type: USERS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: USERS_FAILED,
    });
    console.log(err);
  }
};

export const registerAccount = (formData, type) => async () => {
  try {
    const res = await UserService.registerAccount(formData, type);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      return error.response.data;
    }
  }
};