import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Language, Theme } from "./enums";
import type { AppState } from "./types";

const INITIAL_STATE: AppState = {
  language: Language.PL,
  theme: Theme.LIGHT,
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = appSlice.actions;
export default appSlice.reducer;
