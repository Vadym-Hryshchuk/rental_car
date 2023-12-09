import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./advertsOperation";

const loadingAdverts = (state) => {
  state.isLoading = true;
};
const fetchingFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, loadingAdverts)
      .addCase(fetchAdverts.fulfilled, fetchingFulfilled);
  },
});

export const advertsReduser = advertsSlice.reducer;
