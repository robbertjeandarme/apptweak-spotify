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

// get playlists
export const getPlaylists = createAction("playlist/getPlaylists");
export const getPlaylistsSuccess = createAction<Playlist[]>(
  "playlist/getPlaylistsSuccess"
);
export const getPlaylistsFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistsFailed"
);

// get playlist tracks
export const getPlaylistTracks = createAction<PlaylistTrack[]>(
  "playlist/getPlaylistTracks"
);
export const getPlaylistTracksSuccess = createAction<Track[]>(
  "playlist/getPlaylistTracksSuccess"
);
export const getPlaylistTracksFailed = createAction<ErrorPayload>(
  "playlist/getPlaylistTracksFailed"
);

// select playlist
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

//add playlist
export const addPlaylist = createAction<Playlist>("playlist/addPlaylist");
export const addPlaylistSuccess = createAction<Playlist>(
  "playlist/addPlaylistSuccess"
);
export const addPlaylistFailed = createAction<ErrorPayload>(
  "playlist/addPlaylistFailed"
);

// edit playlist
export const editPlaylist = createAction<Playlist>("playlist/editPlaylist");
export const editPlaylistSuccess = createAction<Playlist>(
  "playlist/editPlaylistSuccess"
);
export const editPlaylistFailed = createAction<ErrorPayload>(
  "playlist/editPlaylistFailed"
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
      .addCase(deleteTrackFromPlaylist, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(deleteTrackFromPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.trackToDelete = action.payload;
        state.playListTracks = state.playListTracks.filter(
          (track) => track.id !== action.payload.id
        );
      })
      .addCase(deleteTrackFromPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      })
      .addCase(addPlaylist, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(addPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playlists.push(action.payload);
      })
      .addCase(addPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      })
      .addCase(editPlaylist, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(editPlaylistSuccess, (state, action) => {
        state.status = RequestStatus.SUCCESS;
        state.playlists = state.playlists.map((playlist) =>
          playlist.id === action.payload.id ? action.payload : playlist
        );
        state.selectedPlaylist = action.payload;
      })
      .addCase(editPlaylistFailed, (state, action) => {
        state.status = RequestStatus.ERROR;
        state.error = action.payload.message;
      });
  },
});

export default playlistSlice.reducer;
