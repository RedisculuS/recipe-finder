import { configureStore } from '@reduxjs/toolkit';
import { recipeReducer } from './slices/recipeSlice';
import { favouritesReducer } from './slices/fovouriteRecipeSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favourites: favouritesReducer,
  },
});
