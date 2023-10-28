import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import playlist from "../containers/playlist/slice";

const rootReducer = combineReducers({
  authentication,
  playlist,
});

export default rootReducer;
