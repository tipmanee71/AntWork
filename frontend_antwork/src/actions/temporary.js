import {
  TEMPORARY_FETCHING,
  TEMPORARY_FAILED,
  TEMPORARY_SUCCESS,
} from "./types";

import TemporaryService from "../services/temporary.service";

export const getAllTemporary = () => async (dispatch) => {
  try {
    dispatch({
      type: TEMPORARY_FETCHING,
    });
    const res = await TemporaryService.getAllTemporary();
    if (res) {
      dispatch({
        type: TEMPORARY_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: TEMPORARY_FAILED,
    });
    console.log(err);
  }
};
