import { createAction, createSlice } from "@reduxjs/toolkit";

import { ErrorPayload, RequestStatus } from "../../types/requests";

import { Playlist } from "../../types/playlist";

export interface PlaylistState {
  playlists: Playlist[];
  status: RequestStatus;
  error?: string;
}

const initialState: PlaylistState = {
  playlists: [],
  status: RequestStatus.IDLE,
};

export const getPlaylists = createAction("playlist/getPlaylists");
export const getPlaylistsSuccess = createAction<Playlist[]>(
  "playlist/getPlaylistsSuccess"
);
export const getPlaylistsFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistsFailed"
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylists, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getPlaylistsSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playlists = action.payload;
      })
      .addCase(getPlaylistsFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      });
  },
});

export default playlistSlice.reducer;
