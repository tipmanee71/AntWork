import {
  BANK_FETCHING,
  BANK_FAILED,
  BANK_SUCCESS,
} from "./types";
import BankService from "../services/bank.service.js";

export const getAllBank = () => async (dispatch) => {
  try {
    dispatch({
        type: BANK_FETCHING
    });
    const res = await BankService.getAllBank();
    if (res) {
        dispatch({
            type: BANK_SUCCESS,
            payload: res.data
        });
    }
  } catch (error) {
    dispatch({
        type: BANK_FAILED
    });
  }
};