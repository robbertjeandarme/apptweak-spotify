import { all } from "@redux-saga/core/effects";

import authSaga from "../containers/auth/authSagas";
import playlistSaga from "../containers/playlist/playlistSagas";

export default function* rootSaga() {
  yield all([authSaga(), playlistSaga()]);
}
