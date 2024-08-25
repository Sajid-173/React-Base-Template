import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";

export const initialState: DataState = {
  newsData: {
    response: "",
    loading: false,
    error: false,
    initialLoad: false,
  },
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    getData: (state) => {
      state.newsData.loading = true;
    },

    getDataSuccess: (state, action) => {
      state.newsData.response = action.payload;
      state.newsData.loading = false;
    },

    getDataFailed: (state) => {
      state.newsData.loading = false;
      state.newsData.error = true;
    },
  },
});

export const {
  getData,
  getDataSuccess,
  getDataFailed,
} = dataSlice.actions;

export default dataSlice.reducer;
