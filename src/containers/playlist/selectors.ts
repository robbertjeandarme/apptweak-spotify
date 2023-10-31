import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.playlist;

export const playlistSelectors = {
  getPlaylists: createSelector(selectSelf, (playlist) => playlist.playlists),
  getStatus: createSelector(selectSelf, (playlist) => playlist.status),
  getError: createSelector(selectSelf, (playlist) => playlist.error),

  getPlaylistTracks: createSelector(
    selectSelf,
    (playlist) => playlist.playListTracks
  ),
  getPlaylistTracksStatus: createSelector(
    selectSelf,
    (playlist) => playlist.status
  ),
  getPlaylistTracksError: createSelector(
    selectSelf,
    (playlist) => playlist.error
  ),
  selectPlaylist: createSelector(
    selectSelf,
    (playlist) => playlist.selectedPlaylist
  ),
  selectTrackToAdd: createSelector(
    selectSelf,
    (playlist) => playlist.trackToAdd
  ),
  addTrackToPlaylistStatus: createSelector(
    selectSelf,
    (playlist) => playlist.status
  ),
  addTrackToPlaylistError: createSelector(
    selectSelf,
    (playlist) => playlist.error
  ),
  deleteTrackFromPlaylist: createSelector(
    selectSelf,
    (playlist) => playlist.trackToDelete
  ),
  deleteTrackFromPlaylistStatus: createSelector(
    selectSelf,
    (playlist) => playlist.status
  ),
  deleteTrackFromPlaylistError: createSelector(
    selectSelf,
    (playlist) => playlist.error
  ),
  addplaylistStatus: createSelector(selectSelf, (playlist) => playlist.status),
  addplaylistError: createSelector(selectSelf, (playlist) => playlist.error),
  addplaylist: createSelector(
    selectSelf,
    (playlist) => playlist.selectedPlaylist
  ),
  editplaylistStatus: createSelector(selectSelf, (playlist) => playlist.status),
  editplaylistError: createSelector(selectSelf, (playlist) => playlist.error),
  editplaylist: createSelector(selectSelf, (playlist) => playlist.playlists),
};
