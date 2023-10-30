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
  addTrackToPlaylist,
  addTrackToPlaylistSuccess,
  addTrackToPlaylistFailed,
  deleteTrackFromPlaylist,
  deleteTrackFromPlaylistSuccess,
  deleteTrackFromPlaylistFailed,
} from "./slice";
import { playlistSelectors } from "./selectors";
import { Playlist } from "../../types/playlist";

function* getPlaylistsSaga() {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);

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
    yield put(getPlaylistsFailed({ message: error.message }));
  }
}

function* getPlaylistTracksSaga(action: any) {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);

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
    //filter out the tracks
    const tracks = data.items.map((item: any) => item.track);
    yield put(getPlaylistTracksSuccess(tracks));
  } catch (error: any) {
    yield put(getPlaylistTracksFailed({ message: error.message }));
  }
}

function* addTrackToPlaylistSaga(action: any) {
  try {
    const trackUri = action.payload.uri;
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const selectedPlaylist: Playlist = yield select(
      playlistSelectors.selectPlaylist
    );
    const request = () => {
      return axios.post(
        `https://api.spotify.com/v1/playlists/${selectedPlaylist.id}/tracks`,
        {
          uris: [trackUri],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    };

    // get data from request
    const { data } = yield call(request);
    yield put(addTrackToPlaylistSuccess(data.items));
  } catch (error: any) {
    yield put(addTrackToPlaylistFailed({ message: error.message }));
  }
}

function* deleteTrackFromPlaylistSaga(action: any) {
  try {
    const trackUri = action.payload.uri;
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const selectedPlaylist: Playlist = yield select(
      playlistSelectors.selectPlaylist
    );
    const request = () => {
      return axios.delete(
        `https://api.spotify.com/v1/playlists/${selectedPlaylist.id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          data: {
            tracks: [
              {
                uri: trackUri,
              },
            ],
          },
        }
      );
    };

    // get data from request

    const { data } = yield call(request);
    console.log("data from delete track from playlist saga");
    console.log(data);
    yield put(deleteTrackFromPlaylistSuccess(data)); // kan de foute zijn
  } catch (error: any) {
    yield put(deleteTrackFromPlaylistFailed({ message: error.message }));
  }
}

export default function* playlistSaga() {
  yield takeEvery(getPlaylists.type, getPlaylistsSaga);
  yield takeEvery(getPlaylistTracks.type, getPlaylistTracksSaga);
  yield takeEvery(addTrackToPlaylist.type, addTrackToPlaylistSaga);
  yield takeEvery(deleteTrackFromPlaylist.type, deleteTrackFromPlaylistSaga);
}
