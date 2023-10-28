import axios from "axios";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { authSelectors } from "../auth/selectors";
import {
  getPlaylists,
  getPlaylistsSuccess,
  getPlaylistsFailed,
  getPlaylistTracks,
  getPlaylistTracksFailed,
  getPlaylistTracksSuccess,
} from "./slice";

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

function* getPlaylistTracksSaga(action: any) {
  console.log(`getPlaylistTracksSaga`);

  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);

    console.log(`accessToken in playlistSaga`, { accessToken });

    const request = () => {
      return axios.get(
        `https://api.spotify.com/v1/playlists/${action.payload}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    };

    // get data from request
    const { data } = yield call(request);
    console.log(`data in getPlaylistTracksSaga`, { data });
    yield put(getPlaylistTracksSuccess(data.items));
  } catch (error: any) {
    console.log(`error in playlistSaga`, { error });
    yield put(getPlaylistTracksFailed({ message: error.message }));
  }
}

export default function* playlistSaga() {
  yield takeEvery(getPlaylists.type, getPlaylistsSaga);
  yield takeEvery(getPlaylistTracks.type, getPlaylistTracksSaga);
}
