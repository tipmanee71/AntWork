import {
  COMPANYSINGUP_FETCHING,
  COMPANYSINGUP_FAILED,
  COMPANYSINGUP_SUCCESS,
} from "../actions/types";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COMPANYSINGUP_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case COMPANYSINGUP_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    case COMPANYSINGUP_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    default:
      return state;
  }
}
