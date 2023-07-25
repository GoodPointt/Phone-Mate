import { INewContact } from '../../common/utils';
import { StyledItem, StyledItemBtn, StyledText } from '../Styled.styled';

interface IContactsItem {
  contact: INewContact;
  onDelete: () => void;
}

export const ContactsItem: React.FC<IContactsItem> = ({
  contact,
  onDelete,
}) => {
  return (
    <StyledItem key={contact.id}>
      <StyledText>
        {contact.name} {contact.number}
      </StyledText>
      <StyledItemBtn onClick={onDelete}>&times;</StyledItemBtn>
    </StyledItem>
  );
};
