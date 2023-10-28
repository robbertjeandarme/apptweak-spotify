import { createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import { Playlist } from "../../types/playlist";
import { Track } from "../../types/track";

export interface PlaylistState {
  selectedPlaylist?: Playlist;
  playlists: Playlist[];
  playListTracks: Track[];
  status: RequestStatus;
  error?: string;
}

const initialState: PlaylistState = {
  selectedPlaylist: undefined,
  playlists: [],
  playListTracks: [],
  status: RequestStatus.IDLE,
};

// actions

export const getPlaylists = createAction("playlist/getPlaylists");
export const getPlaylistsSuccess = createAction<Playlist[]>(
  "playlist/getPlaylistsSuccess"
);
export const getPlaylistsFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistsFailed"
);

export const getPlaylistTracks = createAction<Track[]>(
  "playlist/getPlaylistTracks"
);
export const getPlaylistTracksSuccess = createAction<Track[]>(
  "playlist/getPlaylistTracksSuccess"
);
export const getPlaylistTracksFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistTracksFailed"
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
      })
      .addCase(getPlaylistTracks, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getPlaylistTracksSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playListTracks = action.payload;
      })
      .addCase(getPlaylistTracksFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      });
  },
});

export default playlistSlice.reducer;
