import { StyledInput } from '../Styled.styled';
import { ThandleChange } from '../../common/utils';

import { changeFilter } from '../../store/filterSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';

export const Filter = () => {
  const filter: string = useAppSelector(state => state.filter.filter);
  const dispatch = useAppDispatch();
  const handleChange = (evt: ThandleChange): void => {
    let { value, name } = evt.target;
    if (name === 'filter') dispatch(changeFilter({ filter: value }));
  };
  return (
    <StyledInput
      onChange={handleChange}
      value={filter}
      type="text"
      name="filter"
      placeholder="Search by Name / Phone"
      title="Search contacts by NAME and PHONE_NUMBER"
      required
    />
  );
};
