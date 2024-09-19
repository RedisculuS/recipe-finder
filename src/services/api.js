import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com/recipes';
//Do not forget to fill in your own API key
const API_KEY = '956303a88e164670b61007462f5e7e34';

export const searchRecepiesAPI = async ingredients => {
  const response = await axios.get(`${BASE_URL}/findByIngredients`, {
    params: {
      ingredients: ingredients,
      apiKey: API_KEY,
    },
  });

  console.log(response.data);
  return response.data;
};

export const getRecipeDetailsAPI = async id => {
  const response = await axios.get(`${BASE_URL}/${id}/information/`, {
    params: {
      apiKey: API_KEY,
    },
  });

  console.log(response);
  return response.data;
};
