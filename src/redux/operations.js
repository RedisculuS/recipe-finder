import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchRecepiesAPI } from '../services/api';

export const searchRecepies = createAsyncThunk(
  'recepies/searchRecepies',
  async ingredients => {
    const response = await searchRecepiesAPI(ingredients);
    return response;
  }
);
