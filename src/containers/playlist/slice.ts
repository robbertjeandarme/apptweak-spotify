import { createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import { Playlist } from "../../types/playlist";
import { Track } from "../../types/track";
import { PlaylistTrack } from "../../types/playlistTrack";

export interface PlaylistState {
  selectedPlaylist?: Playlist;
  trackToAdd?: Track;
  trackToDelete?: Track;
  playlists: Playlist[];
  playListTracks: Track[];
  status: RequestStatus;
  error?: string;
}

const initialState: PlaylistState = {
  trackToAdd: undefined,
  trackToDelete: undefined,
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

export const getPlaylistTracks = createAction<PlaylistTrack[]>(
  "playlist/getPlaylistTracks"
);
export const getPlaylistTracksSuccess = createAction<Track[]>(
  "playlist/getPlaylistTracksSuccess"
);
export const getPlaylistTracksFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistTracksFailed"
);

export const selectedPlaylist = createAction<Playlist>(
  "playlist/selectedPlaylist"
);

// add track to playlist
export const addTrackToPlaylist = createAction<Track>(
  "playlist/addTrackToPlaylist"
);
export const addTrackToPlaylistSuccess = createAction<Track>(
  "playlist/addTrackToPlaylistSuccess"
);
export const addTrackToPlaylistFailed = createAction<ErrorPayload>(
  "playlist/addTrackToPlaylistFailed"
);

//delete track from playlist
export const deleteTrackFromPlaylist = createAction<Track>(
  "playlist/deleteTrackFromPlaylist"
);
export const deleteTrackFromPlaylistSuccess = createAction<Track>(
  "playlist/deleteTrackFromPlaylistSuccess"
);
export const deleteTrackFromPlaylistFailed = createAction<ErrorPayload>(
  "playlist/deleteTrackFromPlaylistFailed"
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
      })
      .addCase(selectedPlaylist, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.selectedPlaylist = action.payload;
      })
      .addCase(addTrackToPlaylist, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.trackToAdd = action.payload;
        state.playListTracks.push(action.payload);
      })
      .addCase(addTrackToPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.trackToAdd = action.payload;
      })
      .addCase(addTrackToPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      })
      .addCase(deleteTrackFromPlaylist, (state, action) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(deleteTrackFromPlaylistSuccess, (state, action) => {
        console.log("deleteTrackFromPlaylistSuccess action.payload ");
        console.log(action.payload);

        state.status = RequestStatus.SUCCESS;
        state.trackToDelete = action.payload;
        console.log("state.trackToDelete");
        console.log(state.trackToDelete);
        state.playListTracks = state.playListTracks.filter(
          (track) => track.id !== action.payload.id
        );
      })
      .addCase(deleteTrackFromPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      });
  },
});

export default playlistSlice.reducer;
