import { combineReducers } from "redux";
import auth from "./auth";
import userProfile from "./user-profile";
import users from "./user";
import work from "./work";
import company from "./company";

const appReducer = combineReducers({
  auth,
  users,
  userProfile,
  work,
  company
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
