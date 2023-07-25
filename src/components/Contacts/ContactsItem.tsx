import { useAppDispatch } from '../../common/hooks';
import { INewContact } from '../../common/utils';
import { changeFilter } from '../../store/filterSlice';
import { removeContact } from '../../store/operations';
import { StyledItem, StyledItemBtn, StyledText } from '../Styled.styled';

interface IContactsItem {
  contact: INewContact;
}

export const ContactsItem: React.FC<IContactsItem> = ({
  contact: { id, number, name },
}) => {
  const dispatch = useAppDispatch();
  return (
    <StyledItem key={id}>
      <StyledText>
        {name} {number}
      </StyledText>
      <StyledItemBtn
        onClick={() => {
          id && dispatch(removeContact(id));
          dispatch(changeFilter({ filter: '' }));
        }}
      >
        &times;
      </StyledItemBtn>
    </StyledItem>
  );
};
