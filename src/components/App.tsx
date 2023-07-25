import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { StyledBtn, StyledContainer, StyledItemBtn } from './Styled.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/ContactsList';
import { Modal } from './Modal/Modal';
import { Notification } from './Notification/Notification';

export const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts') || 'null') || []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <StyledBtn className="add" type="button" onClick={toggleModal}>
        Add new contact
      </StyledBtn>
      <ContactsList />
      {showModal && (
        <Modal closeModal={toggleModal}>
          <StyledItemBtn type="button" onClick={toggleModal}>
            &times;
          </StyledItemBtn>
          <ContactForm closeModal={toggleModal} />
        </Modal>
      )}
      <Notification />
    </StyledContainer>
  );
};
