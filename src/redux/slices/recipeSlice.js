import { createSlice } from '@reduxjs/toolkit';
import { searchRecepies } from '../operations';

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    status: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchRecepies.pending, (state, action) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(searchRecepies.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.status = 'succeeded';
        state.isLoading = false;
      })
      .addCase(searchRecepies.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const recipeReducer = recipeSlice.reducer;
