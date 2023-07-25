import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Formik, Field, ErrorMessage, Form } from 'formik';

import { StyledBtn, ErrorMsg, StyledInput } from '../Styled.styled';

import { INITIAL_VALUES, VALIDATION_SCHEMA } from '../../common/formik';
import { INewContact, isContactExist } from '../../common/utils';
import { useAppDispatch, useAppSelector } from '../../common/hooks';

import { addNewContact } from '../../store/contactsSlice';
import { changeFilter } from '../../store/filterSlice';

interface IContactForm {
  closeModal: () => void;
}

export const ContactForm: React.FC<IContactForm> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const contacts: INewContact[] = useAppSelector(
    state => state.contacts.contacts
  );

  const handleSubmit = (values: { name: string; number: string }) => {
    const id = nanoid();
    const newContact = {
      id,
      ...values,
    };
    if (isContactExist(newContact, contacts)) {
      toast.warn(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addNewContact(newContact));
    dispatch(changeFilter({ filter: '' }));
    toast.success(`${newContact.name} succesfully added to your contacts`);
    closeModal();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="text"
          name="name"
          as={StyledInput}
          placeholder="Enter name..."
          autoFocus
        />
        <ErrorMessage name="name" component={ErrorMsg} />

        <Field
          type="tel"
          name="number"
          as={StyledInput}
          placeholder="Enter phone..."
        />
        <ErrorMessage name="number" component={ErrorMsg} />

        <StyledBtn type="submit">Add contact</StyledBtn>
      </Form>
    </Formik>
  );
};
