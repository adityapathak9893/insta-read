import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getInstaRead, setTabValue } from "../../actions/app";
import { AppState, InstaReadInfo } from "../../models";
import { initializedAppState } from "../../models/initializations";

const AppReducer = createReducer(initializedAppState, (app) => {
  app
    .addCase(
      getInstaRead.pending,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getInstaRead.rejected,
      (state: AppState): AppState => ({ ...state })
    )
    .addCase(
      getInstaRead.fulfilled,
      (
        state: AppState,
        { payload }: PayloadAction<InstaReadInfo[]>
      ): AppState => ({ ...state, tabInfo: payload })
    )
    .addCase(setTabValue, (state, action) => {
      state.tabSelected = action.payload;
    });
});

export default AppReducer;
