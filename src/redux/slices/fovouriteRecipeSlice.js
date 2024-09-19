import { createSlice } from '@reduxjs/toolkit';

export const favouritesRecipeSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [],
  },
  reducers: {
    addFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const { addFavourites, removeFavourites } =
  favouritesRecipeSlice.actions;
export const favouritesReducer = favouritesRecipeSlice.reducer;
