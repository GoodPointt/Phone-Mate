import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSortType } from '../../redux/sortSlice';
import { StyledSortTabs } from './SortTabs.styled';

export const SortTabs = () => {
  const sort = useAppSelector(state => state.sort.sort);
  const dispatch = useAppDispatch();

  return (
    <StyledSortTabs>
      <button
        id="btn"
        className={sort === 'all' ? 'active' : ''}
        onClick={() => dispatch(setSortType('all'))}
      >
        All
      </button>
      <button
        id="btn"
        className={sort === 'favorite' ? 'active' : ''}
        onClick={() => dispatch(setSortType('favorite'))}
      >
        Favorites
      </button>
    </StyledSortTabs>
  );
};
