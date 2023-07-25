import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { StyledBtn, StyledContainer, StyledItemBtn } from './Styled.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/ContactsList';
import { Modal } from './Modal/Modal';
import { Notification } from './Notification/Notification';
import { fetchContacts } from '../store/operations';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { Loader } from './Loader/Loader';
import { onError } from '../common/toasts';
import { toggleModal } from '../store/modalSlice';

export const App: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
  const { status, error } = useAppSelector(state => state.contacts);
  const { isModalOpen } = useAppSelector(state => state.isModalOpen);

  const dispatch = useAppDispatch();

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <StyledBtn
        className="add"
        type="button"
        onClick={() => dispatch(toggleModal())}
      >
        Add new contact
      </StyledBtn>
      {status === 'loading' && !error && <Loader />}
      {status === 'resolved' && <ContactsList />}
      {status === 'rejected' && error && onError(error) && (
        <>
          <h2>Opps! some error occured😒 Try again later.</h2>
          <h3>{error}</h3>
        </>
      )}
      {isModalOpen && (
        <Modal>
          <StyledItemBtn type="button" onClick={() => dispatch(toggleModal())}>
            &times;
          </StyledItemBtn>
          <ContactForm />
        </Modal>
      )}
      <Notification />
    </StyledContainer>
  );
};
