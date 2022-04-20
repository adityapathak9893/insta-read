import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { mockApiCall } from "../../data-services";
import { InstaReadInfo, SET_TAB_VALUE, UPDATE_DATA } from "../../models";

export const getInstaRead = createAsyncThunk<InstaReadInfo[]>(
  UPDATE_DATA,
  async () => {
    return await mockApiCall();
  }
);

export const setTabValue = createAction(
  SET_TAB_VALUE,
  function prepare(tabVal: number) {
    return {
      payload: tabVal,
    };
  }
);
