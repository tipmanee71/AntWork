import {
  TEMPORARY_FETCHING,
  TEMPORARY_FAILED,
  TEMPORARY_SUCCESS,
} from "../actions/types";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TEMPORARY_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case TEMPORARY_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    case TEMPORARY_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    default:
      return state;
  }
}
