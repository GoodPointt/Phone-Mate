import { StyledList, StyledText } from '../Styled.styled';

import { useAppSelector } from '../../common/hooks';
import { INewContact } from '../../common/utils';

import { Filter } from '../../components/Filter/Filter';
import { ContactsItem } from './ContactsItem';

export const ContactsList = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const filter = useAppSelector(state => state.filter.filter);

  const filteredContacts: INewContact[] = contacts?.filter(
    contact =>
      contact?.name
        .toLowerCase()
        .trim()
        .includes(filter?.toLowerCase().trim()) ||
      contact?.number.includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h2>
        There
        {contacts?.length === 1 ? (
          <span> is {contacts?.length} contact </span>
        ) : (
          <span> are {contacts?.length} contacts </span>
        )}
        in your phonebook
      </h2>

      {contacts?.length > 0 && <Filter />}
      {filter ? (
        <>
          <h4>Search result:</h4>
          {filteredContacts?.length > 0 ? (
            <StyledList>
              {filteredContacts.map(filteredContact => (
                <ContactsItem
                  key={filteredContact.id}
                  contact={filteredContact}
                />
              ))}
            </StyledList>
          ) : (
            <StyledText>
              Sorry, friend, but you have no contacts matching your search query
              😒
            </StyledText>
          )}
        </>
      ) : (
        <>
          <StyledList>
            {contacts?.map(contact => (
              <ContactsItem
                key={contact.id}
                contact={contact}
                // onDelete={() => {
                //   dispatch(deleteContact({ contactId: contact.id }));
                //   dispatch(changeFilter({ filter: '' }));
                // }}
              />
            ))}
          </StyledList>
        </>
      )}
    </>
  );
};
