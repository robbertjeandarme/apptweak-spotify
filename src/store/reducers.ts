import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import playlist from "../containers/playlist/slice";
import preferences from "../containers/preferences/slice";

const rootReducer = combineReducers({
  authentication,
  playlist,
  preferences,
});

export default rootReducer;
