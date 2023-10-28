import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.playlist;

export const playlistSelectors = {
  getPlaylists: createSelector(selectSelf, (playlist) => playlist.playlists),
  getStatus: createSelector(selectSelf, (playlist) => playlist.status),
  getError: createSelector(selectSelf, (playlist) => playlist.error),
};
