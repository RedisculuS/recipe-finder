import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { searchRecepies } from '../../redux/operations';

const RecipeList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRecepies());
  }, [dispatch]);

  return (
    <div>
      Recipe List
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};

export default RecipeList;
