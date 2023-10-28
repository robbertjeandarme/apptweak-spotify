import axios from "axios";

import { call, put, select, takeEvery } from "@redux-saga/core/effects";

import { authSelectors } from "../auth/selectors";

import { getPlaylists, getPlaylistsSuccess, getPlaylistsFailed } from "./slice";

function* getPlaylistsSaga() {
  console.log(`getPlaylistsSaga`);

  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);

    console.log(`accessToken in playlistSaga`, { accessToken });

    const request = () => {
      return axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };

    // get data from request
    const { data } = yield call(request);

    yield put(getPlaylistsSuccess(data.items));
  } catch (error: any) {
    console.log(`error in playlistSaga`, { error });
    yield put(getPlaylistsFailed({ message: error.message }));
  }
}

export default function* playlistSaga() {
  yield takeEvery(getPlaylists.type, getPlaylistsSaga);
}
