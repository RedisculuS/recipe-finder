import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecepies } from '../../redux/slices/recipeSlice';

const SearchRecipes = () => {
  const [ingredients, setIngredients] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (ingredients) {
      dispatch(searchRecepies(ingredients));
    }
  };

  return (
    <div>
      <input
        type="search"
        name="search-recipe"
        placeholder="Type the ingredients"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchRecipes;
