import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleAdvertFavorite(state, action) {
      const index = state.items.findIndex(
        advert => advert.id === action.payload.id
      );

      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const favoritesReduser = favoritesSlice.reducer;
export const { toggleAdvertFavorite } = favoritesSlice.actions;
