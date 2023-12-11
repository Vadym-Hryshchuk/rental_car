import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    items: {},
  },
  reducers: {
    addFilters(state, action) {
      state.items = action.payload;
    },
  },
});

export const filtersReduser = filtersSlice.reducer;
export const { addFilters } = filtersSlice.actions;
