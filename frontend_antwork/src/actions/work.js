import {
  WORK_FETCHING,
  WORK_FAILED,
  WORK_SUCCESS,
} from "./types";

import WorkService from "../services/work.service";

export const getAllWork = () => async (dispatch) => {
  try {
    dispatch({
      type: WORK_FETCHING,
    });
    const res = await WorkService.getAllWork();
    if (res) {
      dispatch({
        type: WORK_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: WORK_FAILED,
    });
    console.log(err);
  }
};
