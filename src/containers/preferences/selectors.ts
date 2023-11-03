import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.preferences;

export const preferencesSelectors = {
  getDarkmode: createSelector(
    selectSelf,
    (preferences) => preferences.darkmode
  ),
};
