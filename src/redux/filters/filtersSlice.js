import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    items: {},
  },
  reducers: {
    addFilters(state, action) {
      if (
        action.payload.selectedMake !== null &&
        action.payload.selectedMake !== undefined &&
        action.payload.selectedPrice !== null &&
        action.payload.selectedPrice !== undefined &&
        action.payload.selectFromMileage !== '' &&
        action.payload.selectFromMileage !== undefined &&
        action.payload.selectToMileage !== '' &&
        action.payload.selectToMileage !== undefined
      ) {
        state.items = {};
      } else {
        state.items = action.payload;
      }
    },
  },
});

export const filtersReduser = filtersSlice.reducer;
export const { addFilters } = filtersSlice.actions;
