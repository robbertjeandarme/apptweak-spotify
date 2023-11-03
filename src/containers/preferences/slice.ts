import { createAction, createSlice } from "@reduxjs/toolkit";

export interface PreferencesState {
  darkmode: boolean;
}

const initialState: PreferencesState = {
  darkmode: true,
};

// actions
export const toggleDarkmode = createAction("preferences/toggleDarkmode");

const PreferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export default PreferencesSlice.reducer;
